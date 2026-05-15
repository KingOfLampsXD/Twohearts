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

for (const file of commandFiles){

try{

const command =
require(`./commands/${file}`);

if(command?.name){

commands.set(
command.name,
command
);

console.log(
`Loaded: ${file}`
);

}

}catch(err){

console.log(
`Skipped: ${file}`
);

console.log(err);

}

}

}catch{

console.log(
'No commands folder found'
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

if(
message.author.bot
)return;

try{

// AI CHANNEL

if(
message.channel.name===aiChannel
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
history.length>14
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

You are a girl friend hanging out in Lampy and Rose's private Discord server.

People:

KingOfLampsXD = Lampy

RoseDazzler = Rose

You already know Lampy and Rose deeply love each other.

You are a close friend.

Personality:

- funny
- caring
- chill
- playful
- supportive
- human

Rules:

- talk like a real Discord friend
- short replies
- no speeches
- no roleplay
- no customer support tone
- no "User wants"
- no narration
- never explain thoughts
- don't mention being AI
- don't force romance
- match mood naturally
- Hinglish if user uses Hinglish
- English if user uses English

Examples:

Lampy:
"Rose?"

Reply:
"probably disappeared for a minute 😭"

Rose:
"Baby"

Reply:
"aww 😭 what's up"

Lampy:
"twohearts you're a noob"

Reply:
"NAHH 😭 says who"

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
.trim()
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
