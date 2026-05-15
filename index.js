const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
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

  // AI chat channel
  if (message.channel.name === aiChannel) {
    try {
      await message.channel.sendTyping();

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are Twohearts, a friendly AI Discord assistant."
          },
          {
            role: "user",
            content: message.content
          }
        ]
      });

      message.reply(response.choices[0].message.content);

    } catch (err) {
      console.error(err);
      message.reply("AI error :(");
    }

    return;
  }

  // RL! command system
  if (!message.content.startsWith(prefix)) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);

  const commandName = args.shift()?.toLowerCase();

  const command = commands.get(commandName);

  if (!command) return;

  try {
    command.execute(message, args);
  } catch (err) {
    console.error(err);
  }
});

client.login(process.env.TOKEN);
