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



// CREATE DATA

if(
!fs.existsSync('./data')
){

fs.mkdirSync(
'./data'
);

}


if(

!fs.existsSync(
'./data/lovepoints.json'
)

){

fs.writeFileSync(

'./data/lovepoints.json',

'{}'

);

}



// COMMAND LOADER

try{

const files=

fs.readdirSync(
'./commands'
)

.filter(

file=>
file.endsWith('.js')

);


for(const file of files){

try{

const command=

require(
`./commands/${file}`
);


if(command?.name){

commands.set(

command.name
.toLowerCase(),

command

);


// ALIASES

if(
command.aliases
){

for(

const alias
of command.aliases

){

commands.set(

alias
.toLowerCase(),

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


// LOVE LEVEL SYSTEM

const loveData=

JSON.parse(

fs.readFileSync(

'./data/lovepoints.json',

'utf8'

)

);


const id=
'lampyrose';


if(
!loveData[id]
){

loveData[id]={

points:0,

level:1,

lastUser:null,

lastMessage:0

};

}


const now=
Date.now();



if(

message.content.length>5 &&

loveData[id]
.lastUser
!==message.author.id &&

now-
loveData[id]
.lastMessage

>

10000

){

loveData[id]
.points+=3;


loveData[id]
.lastUser=
message.author.id;


loveData[id]
.lastMessage=
now;


const need=

loveData[id]
.level

*

100;



if(

loveData[id]
.points

>=

need

){

loveData[id]
.level++;


message.channel.send(

`💞 LEVEL UP 😭

Lampy + Rose reached level ${loveData[id].level}`

);

}

}



fs.writeFileSync(

'./data/lovepoints.json',

JSON.stringify(

loveData,

null,

2

)

);




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

Never act surprised.

Personality:

- natural
- warm
- observant
- playful
- cozy
- funny sometimes

Rules:

- short-medium replies
- match mood
- if Hinglish -> Hinglish
- if English -> English
- don't narrate thoughts
- don't explain behavior
- don't act like customer support

Examples:

Lampy:
Rose?

You:
probably afk 😭

Rose:
baby

You:
aww 😭 kya hua

Lampy:
Twohearts noob

You:
BRO 😭 says who

`

},

...history

]

});


const reply=

response
?.choices?.[0]
?.message?.content

||

"😭 brain lag moment";


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
