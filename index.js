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

// keeps recent chat memory per channel
const memory = new Map();

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

    // AI channel
    if (message.channel.name === aiChannel) {

      await message.channel.sendTyping();

      const channelId = message.channel.id;

      if (!memory.has(channelId)) {
        memory.set(channelId, []);
      }

      const history = memory.get(channelId);

      history.push({
        role: 'user',
        content: `${message.author.username}: ${message.content}`
      });

      // keep last 10 messages
      if (history.length > 10) {
        history.shift();
      }

      const response = await openai.chat.completions.create({
        model: 'openai/gpt-oss-20b:free',
        messages: [
          {
            role: 'system',
            content: `
You are Twohearts.

You are a natural Discord friend:
- casual and human-like
- fun and expressive
- not robotic
- remember the flow of the conversation
- love Minecraft, creativity and chatting
- respond naturally
- avoid repetitive "I'm sorry..." style responses
`
          },
          ...history
        ]
      });

      const reply =
        response.choices[0].message.content;

      history.push({
        role: 'assistant',
        content: reply
      });

      return message.reply(reply);
    }

    // RL! commands
    if (!message.content.startsWith(prefix))
      return;

    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/);

    const commandName =
      args.shift()?.toLowerCase();

    const command =
      commands.get(commandName);

    if (!command) return;

    command.execute(message, args);

  } catch (err) {
    console.error(err);
    message.reply(`❌ ${err.message}`);
  }
});

client.login(process.env.TOKEN);
