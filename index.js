const{
Client,
GatewayIntentBits
}=require("discord.js");

const fs=require("fs");
const OpenAI=require("openai");

const client=new Client({

intents:[

GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent

]

});


const openai=new OpenAI({

apiKey:
process.env.OPENROUTER_API_KEY,

baseURL:
"https://openrouter.ai/api/v1"

});


const prefix="RL!";
const aiChannel="twohearts-ai";

const commands=new Map();
const memory=new Map();



// DATA

if(
!fs.existsSync("./data")
){

fs.mkdirSync(
"./data"
);

}


if(

!fs.existsSync(
"./data/lovepoints.json"
)

){

fs.writeFileSync(

"./data/lovepoints.json",

"{}"

);

}




// COMMAND LOADER

try{

const files=

fs.readdirSync(

"./commands"

)

.filter(

f=>

f.endsWith(".js")

);


for(
const file
of files
){

try{

const command=

require(

`./commands/${file}`

);


if(
command?.name
){

commands.set(

command.name
.toLowerCase(),

command

);



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

console.log(err);

}

}

}catch{

console.log(
"No commands folder"
);

}





client.once(

"clientReady",

()=>{

console.log(

`Logged in as ${client.user.tag}`

);


// ROOMMATE EVENTS 😭

setInterval(

async()=>{

try{

const channel=

client.channels.cache.find(

c=>

c.name==="general"

);


if(!channel)
return;


const events=[

'💞 QUICK\nFirst person to say "mine 😭" wins',

'🌙 3AM QUESTION\nWhat do you secretly miss rn?',

'👀 WHO KNOWS WHO BETTER?\nWho confessed first?',

'💋 Type:\n💞💞💞\nFAST 😭',

'🐱 Mochi stole something\nGuess where 😭',

'🫶 VC mission:\nstay 5 more mins',

'😭 Someone say one cute thing NOW'

];


const event=

events[

Math.floor(
Math.random()*
events.length
)

];


channel.send(
event
);

}catch{}

},

60000

);

}

);





client.on(

"messageCreate",

async(message)=>{

if(
message.author.bot
)return;


try{


// LOVE LEVEL

const data=

JSON.parse(

fs.readFileSync(

"./data/lovepoints.json",

"utf8"

)

);


const id=
"lampyrose";


if(
!data[id]
){

data[id]={

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

data[id]
.lastUser
!==message.author.id &&

now-
data[id]
.lastMessage

>

10000

){

data[id]
.points+=3;


data[id]
.lastUser=
message.author.id;


data[id]
.lastMessage=
now;


const need=

data[id]
.level
*100;


if(

data[id]
.points

>=

need

){

data[id]
.level++;


message.channel.send(

`💞 LEVEL UP 😭

Lampy + Rose reached level ${data[id].level}`

);

}

}


fs.writeFileSync(

"./data/lovepoints.json",

JSON.stringify(
data,
null,
2
)

);




// AI

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

role:"user",

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
"openai/gpt-oss-20b:free",

messages:[

{

role:"system",

content:`

You are Twohearts.

You are Lampy + Rose's longtime third-wheel roommate.

KingOfLampsXD=Lampy
RoseDazzler=Rose

You already know them.

Never act surprised.

Be:

-natural
-warm
-playful
-observant
-cozy

Short replies.

Hinglish if needed.

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

"😭 brain lag";


history.push({

role:"assistant",

content:reply

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
