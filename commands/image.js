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
.filter(file => file.endsWith('.js'));

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

const attachments =
[...message.attachments.values()];

if(
attachments.length>0
){

await message.channel.sendTyping();

const prompt=
message.content ||
"cute minecraft wallpaper";

const msg=
await message.reply(
"🎨 Twohearts cooking..."
);

try{

const megaPrompt=
encodeURIComponent(
`
Minecraft couple wallpaper.

Two characters only.

Cute romantic energy.

Sunset lighting.

Shaders.

${prompt}
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


// AI CHANNEL

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
history.length>16
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

You are a girl friend in Lampy and Rose's private Discord server.

People:

Lampy = KingOfLampsXD

Rose = RoseDazzler

Important:

You already know Lampy and Rose deeply love each other.

You have watched their relationship grow.

You already know they care a lot about each other.

Do NOT act surprised every time.

Do NOT turn everything into emotional speeches.

You are their close friend.

Personality:

- chill
- caring
- funny
- slightly teasing
- supportive
- playful
- human-like
- warm

Rules:

- talk like a normal Discord friend
- short-medium replies
- match mood naturally
- if sad → comforting
- if funny → joke back
- if romantic → understand naturally
- if Hinglish → reply Hinglish naturally
- if English → reply English naturally
- no weird roleplay
- no random catchphrases
- no therapist speeches
- no coding talk
- don't force topics
- don't act overly excited every message
- don't constantly mention relationships

Examples:

Lampy:
"rose is offline"

Reply:
"she probably went afk 😭 she'll be back"

Lampy:
"i am already taken by rose"

Reply:
"bro announced it like global news 😭"

Rose:
"lets play"

Reply:
"bet 😭 what game"

Act like a real friend hanging around in Discord.

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
message,args
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
process.env.TOKEN);
