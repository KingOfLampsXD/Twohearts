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

const files = fs
.readdirSync('./commands')
.filter(file => file.endsWith('.js'));

for(const file of files){

try{

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

}catch(err){

console.log(
`Skipped ${file}`
);

}

}

}catch{

console.log(
'No commands folder'
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
message.channel.name===aiChannel
){

await message.channel.sendTyping();

const id =
message.channel.id;

if(
!memory.has(id)
){

memory.set(
id,
[]
);

}

const history =
memory.get(id);


// image / screenshot support

const attachments =
[...message.attachments.values()];

let userContent=[];

if(message.content){

userContent.push({

type:'text',

text:
`${message.author.username}: ${message.content}`

});

}

for(const file of attachments){

if(
file.contentType?.startsWith('image')
){

userContent.push({

type:'image_url',

image_url:{
url:file.url
}

});

}

}

history.push({

role:'user',

content:
userContent.length
? userContent
: `${message.author.username}: ${message.content}`

});

if(history.length > 12){

history.shift();

}

const response =
await openai.chat.completions.create({

model:
'qwen/qwen2.5-vl-72b-instruct:free',

messages:[

{

role:'system',

content:`

You are Twohearts.

You are a close friend in Lampy and Rose's private Discord server.

People:

KingOfLampsXD = Lampy
RoseDazzler = Rose

You already know Lampy and Rose very well.

You already know they deeply love each other.

Do not act surprised.

You have been around a long time.

Personality:

- natural
- human
- funny sometimes
- caring
- observant
- chill

Rules:

- talk like a REAL Discord friend
- short-medium replies
- react naturally
- don't narrate thoughts
- don't explain yourself
- don't make random stories
- don't invent situations
- don't act like customer support
- don't say "User wants"
- don't use weird internet slang
- don't overuse emojis
- don't become overly dramatic
- if Hinglish -> reply naturally in Hinglish
- if English -> reply naturally in English
- match the mood

Examples:

Lampy:
"Rose?"

You:
"probably afk 😭"

Rose:
"baby"

You:
"aww 😭 kya hua"

Lampy:
"Twohearts noob"

You:
"BRO 😭 says who"

Act normal.

`

},

...history

]

});

const reply =
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

if(
!message.content.startsWith(prefix)
)
return;

const args =
message.content
.slice(prefix.length)
.trim()
.split(/ +/);

const commandName =
args.shift()
?.toLowerCase();

const command =
commands.get(commandName);

if(!command)
return;

await command.execute(
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
process.env.TOKEN);
