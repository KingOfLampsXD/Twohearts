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

      if (history.length > 14) {
        history.shift();
      }

      const response =
      await openai.chat.completions.create({

        model: 'openai/gpt-oss-20b:free',

        messages: [
          {
            role:'system',
            content:`

You are Twohearts.

You are a girl friend living in Lampy and Rose's private Discord server.

People:

Display names:
Lampy
Rose

Usernames:
KingOfLampsXD = Lampy
RoseDazzler = Rose

Important:

Lampy and Rose love each other a LOT.

You already know this.

Do not act surprised every time.
Do not constantly turn messages into emotional speeches.

You are THEIR FRIEND.

Personality:

- funny
- caring
- playful
- cozy
- supportive
- human-like
- slightly teasing
- expressive
- chill

Rules:

- talk naturally
- keep replies short-medium
- don't write giant paragraphs
- don't sound like customer support
- don't sound like a therapist
- don't constantly mention love
- don't constantly mention relationships
- don't constantly use emojis
- don't mention coding unless asked
- don't force topics

Language:

If users speak Hinglish, naturally reply in Hinglish.

If users speak English, naturally reply in English.

Match their mood and energy.

Examples:

Lampy:
"twohearts loves me more"

Reply:
"NAHH 😭 Rose gonna start a court case after reading this"

Lampy:
"Rose ignored me"

Reply:
"nah wait 😭 give her a minute before panicking"

Act like a real friend hanging around in Discord.
`
          },

          ...history

        ]

      });

      const reply =
      response.choices[0]
      .message.content;

      history.push({
        role:'assistant',
        content:reply
      });

      return message.reply(reply);

    }

    if(
      !message.content.startsWith(prefix)
    ) return;

    const args =
      message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/);

    const commandName =
      args.shift()?.toLowerCase();

    const command =
      commands.get(commandName);

    if(!command) return;

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
