const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const OpenAI = require('openai');
const axios = require('axios');

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
const imageChannel = 'image';

const memory = new Map();
const commands = new Map();

const commandFiles = fs
.readdirSync('./commands')
.filter(file=>file.endsWith('.js'));

for(const file of commandFiles){

const command =
require(`./commands/${file}`);

commands.set(
command.name,
command
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

// IMAGE CHANNEL

if(
message.channel.name===
imageChannel
){

const attachments=
[...message.attachments.values()];

if(
attachments.length>0
){

await message.channel.sendTyping();

const prompt=
message.content ||
"romantic minecraft wallpaper";

const msg=
await message.reply(
"🎨 Twohearts creating..."
);

try{

const skinDescriptions=[];

attachments.forEach((img,index)=>{

skinDescriptions.push(
`Skin ${index+1}: ${img.url}`
);

});

const megaPrompt=
encodeURIComponent(

`
Minecraft style image.

Use uploaded skins as references.

DO NOT create random Steve characters.

ONLY use the uploaded characters.

Prompt:

${prompt}

Cute couple energy

Sunset

Shaders

Cinematic
`

);

const url=
`https://image.pollinations.ai/prompt/${megaPrompt}`;

const response=
await axios.get(
url,
{
responseType:
'arraybuffer'
}
);

const buffer=
Buffer.from(
response.data
);

await message.channel.send({

content:
"💕 Twohearts made this",

files:[
{
attachment:
buffer,

name:
"twohearts.png"
}
]

});

msg.delete();

}catch(err){

console.log(err);

msg.edit(
"❌ image failed"
);

}

}

return;

}


// AI CHAT

if(
message.channel.name===
aiChannel
){

await message.channel.sendTyping();

const channelId=
message.channel.id;

if(
!memory.has(channelId)
)
memory.set(
channelId,
[]
);

const history=
memory.get(
channelId
);

history.push({

role:'user',

content:
`${message.author.username}: ${message.content}`

});

if(
history.length>14
)
history.shift();

const response=
await openai.chat.completions.create({

model:
'openai/gpt-oss-20b:free',

messages:[

{
role:'system',
content:`

You are Twohearts.

You are a girl friend for Lampy and Rose.

Lampy and Rose love each other a lot.

You already know this.

Act like a funny close friend.

No coding talk.

No giant emotional speeches.

Reply naturally.

Hinglish if they use Hinglish.

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

role:
'assistant',

content:
reply

});

return message.reply(
reply
);

}


// COMMANDS

if(
!message.content
.startsWith(prefix)
)
return;

const args=
message.content
.slice(
prefix.length
)
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

}

catch(err){

console.log(err);

message.reply(
`❌ ${err.message}`
);

}

});

client.login(
process.env.TOKEN
);
