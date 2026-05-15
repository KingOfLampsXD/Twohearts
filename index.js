const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const OpenAI = require('openai');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1'
});

const prefix = 'RL!';
const aiChannel = 'twohearts-ai';

const commands = new Map();

const commandFiles = fs
  .readdirSync('./commands')
  .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.set(command.name, command);
}

client.once('clientReady', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  try {

    // AI chat channel
    if (message.channel.name === aiChannel) {

      await message.channel.sendTyping();

      const response = await openai.chat.completions.create({
        model: 'meta-llama/llama-3.1-8b-instruct:free',
        messages: [
          {
            role: 'system',
            content:
              'You are Twohearts, a smart, friendly Discord AI assistant.'
          },
          {
            role: 'user',
            content: message.content
          }
        ]
      });

      return message.reply(
        response.choices[0].message.content
      );
    }

    // RL! commands
    if (!message.content.startsWith(prefix)) return;

    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/);

    const commandName = args.shift()?.toLowerCase();

    const command = commands.get(commandName);

    if (!command) return;

    command.execute(message, args);

  } catch (err) {
    console.error(err);

    message.reply(`❌ ${err.message}`);
  }
});

client.login(process.env.TOKEN);
