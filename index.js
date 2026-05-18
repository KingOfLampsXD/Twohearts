const {
Client,
GatewayIntentBits
}=require('discord.js');

const fs=require('fs');
const OpenAI=require('openai');

const client=new Client({

intents:[

GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent

]

});


const openai=new OpenAI({

apiKey:process.env.OPENROUTER_API_KEY,

baseURL:
'https://openrouter.ai/api/v1'

});


const prefix='RL!';
const aiChannel='twohearts-ai';

const memory=new Map();
const commands=new Map();



// COMMAND LOADER

try{

const files=

fs.readdirSync('./commands')

.filter(
file=>file.endsWith('.js')
);


for(const file of files){

try{

const command=
require(
`./commands/${file}`
);


if(command?.name){

commands.set(
command.name.toLowerCase(),
command
);


// ALIASES

if(command.aliases){

for(
const alias
of command.aliases
){

commands.set(

alias.toLowerCase(),

command

);

}

}


console.log(
`Loaded ${file}`
);

}


}catch(err){

console.log(
`Skipped ${file}`
);

console.log(
err
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

}

);




client.on(

'messageCreate',

async(message)=>{

if(
message.author.bot
)return;


try{


// AI CHANNEL

if(

message.channel.name===
aiChannel

){

await
message.channel.sendTyping();


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
history.length>12
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

You are Lampy and Rose's longtime third-wheel bestie.

People:

KingOfLampsXD = Lampy
RoseDazzler = Rose

You already know Lampy and Rose deeply love each other.

You already know them extremely well.

Never act surprised.

Personality:

- warm
- human
- funny sometimes
- playful
- observant
- caring
- natural

Rules:

- talk like a REAL Discord friend
- short-medium replies
- react naturally
- don't narrate thoughts
- don't explain behavior
- don't make random stories
- don't act like customer support
- don't overuse emojis
- if Hinglish -> Hinglish
- if English -> English
- match mood

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

`

},

...history

]

});


const reply=

response
?.choices?.[0]
?.message?.content

||"😭 my brain lagged";


history.push({

role:'assistant',

content:reply

});


return message.reply(
reply
);

}



// PREFIX COMMANDS

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



if(
!command
)return;



await command.execute(

message,
args

);


}catch(err){

console.log(err);

message.reply(

`❌ ${err.message}`

).catch(()=>{});

}

}

);



client.login(
process.env.TOKEN
);
