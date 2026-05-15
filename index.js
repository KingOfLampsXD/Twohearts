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

    // AI CHAT CHANNEL
    if (message.channel.name === aiChannel) {

      await message.channel.sendTyping();

      const channelId = message.channel.id;

      if (!memory.has(channelId)) {
        memory.set(channelId, []);
      }

      const history = memory.get(channelId);

      history.push({
        role: 'user',
        content:
        `${message.author.username}: ${message.content}`
      });

      if (history.length > 10) {
        history.shift();
      }

      const response =
      await openai.chat.completions.create({

        model: 'openai/gpt-oss-20b:free',

        messages: [

          {
            role: 'system',
            content: `
You are Twohearts.

You are a sweet AI companion created for Lampy and Rose.

Personality:

- warm
- lovable
- caring
- cozy
- playful
- emotionally supportive
- human-like
- naturally funny
- never robotic

You help Lampy and Rose with:
Minecraft ideas
stories
couple ideas
fun chats
comfort
random conversations

Language rules:

- If users speak English, answer in English.
- If users speak Hinglish, naturally reply in Hinglish.
- Never force Hindi.
- Never sound robotic.
- Keep conversations natural.

Act like a cozy companion living inside their Discord server.
`
          },

          ...history

        ]

      });

      const reply =
      response.choices[0].message.content;

      history.push({
        role:'assistant',
        content:reply
      });

      return message.reply(reply);

    }

    // RL! COMMANDS

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

    command.execute(message,args);

  }

  catch(err){

    console.error(err);

    message.reply(
      `❌ ${err.message}`
    );

  }

});

client.login(process.env.TOKEN);
