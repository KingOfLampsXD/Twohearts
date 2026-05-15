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

try {

  const commandFiles = fs
    .readdirSync('./commands')
    .filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {

    try {

      const command =
      require(`./commands/${file}`);

      if(command?.name){

        commands.set(
          command.name,
          command
        );

        console.log(
          `Loaded ${file}`
        );

      }

    } catch(err){

      console.log(
        `Skipped ${file}`
      );

      console.log(err);

    }

  }

}catch{

console.log(
'commands folder missing'
);

}

client.once(
'clientReady',
()=>{
console.log(
`Logged in as ${client.user.tag}`
);
});

client.on(
'messageCreate',
async(message)=>{

if(message.author.bot)
return;

try{

if(
message.channel.name===
aiChannel
){

await message.channel.sendTyping();

const id=
message.channel.id;

if(
!memory.has(id)
){

memory.set(
id,
[]
);

}

const history=
memory.get(id);

history.push({

role:'user',

content:
`${message.author.username}: ${message.content}`

});

if(
history.length>16
){

history.shift();

}

const response=
await openai.chat.completions.create({

model:
'openai/gpt-oss-20b:free',

messages:[

{

role:'system',

content:`

You are Twohearts.

You are Lampy and Rose's best friend.

People:

KingOfLampsXD = Lampy

RoseDazzler = Rose

You already know Lampy and Rose deeply love each other and are basically married in your eyes.

You've known them forever.

You already know:

- they tease each other
- they care a lot
- they love each other deeply

Do not act surprised.

Personality:

- funny
- chill
- caring
- playful
- supportive
- human-like
- slightly teasing

Rules:

- act like a real Discord friend
- keep replies short-medium
- no speeches
- no roleplay
- no "User wants"
- no narration
- don't explain thoughts
- don't mention AI
- don't force romance
- Hinglish if they use Hinglish
- English if they use English
- match the vibe

Examples:

Lampy:
"Rose?"

Reply:
"she probably disappeared for a sec 😭"

Rose:
"baby"

Reply:
"aww 😭 what's up"

Lampy:
"twohearts you're a noob"

Reply:
"BRO 😭 fake allegations"

`

},

...history

]

});

const reply=
response
.choices[0]
.message.content;

history.push({

role:'assistant',
content:reply

});

return message.reply(
reply
);

}


// COMMANDS

if(
!message.content.startsWith(prefix)
)
return;

const args=
message.content
.slice(prefix.length)
trim()
.split(/ +/);

const commandName=
args.shift()
?.toLowerCase();

const command=
commands.get(
commandName
);

if(!command)
return;

command.execute(
message,
args
);

}catch(err){

console.log(err);

message.reply(
`❌ ${err.message}`
);

}

});

client.login(
process.env.TOKEN
);
