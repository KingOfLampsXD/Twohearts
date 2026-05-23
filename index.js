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

fs.mkdirSync("./data");

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

const files=

fs.readdirSync("./commands")

.filter(

f=>
f.endsWith(".js")

);


for(const file of files){

try{

const command=

require(
`./commands/${file}`
);

if(
!command?.name
)
continue;


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

}catch(err){

console.log(
`Skipped ${file}`
);

}

}





client.once(

"clientReady",

()=>{

console.log(

`${client.user.tag} online 😭`

);




// ROOMMATE EVENTS

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


const type=

Math.floor(
Math.random()*3
);



// MATH

if(type===0){

const a=
Math.floor(Math.random()*20)+1;

const b=
Math.floor(Math.random()*20)+1;

const answer=
a+b;


await channel.send(

`🧠 QUICK MATH 😭

${a}+${b}=?

30 sec`

);


const collector=

channel.createMessageCollector({

time:30000

});


collector.on(

"collect",

m=>{

if(
m.author.bot
)return;


if(
Number(m.content)
===answer
){

channel.send(

`🏆 ${m.author}

correct 😭`

);

collector.stop();

}

}

);

return;

}




// TYPING

if(type===1){

const words=[

"ILoveRose",

"Stay5MoreMins",

"MochiAteCookie",

"LampyLovesRose",

"DistanceLosingAgain"

];


const word=

words[
Math.floor(
Math.random()*
words.length
)
];


await channel.send(

`⌨️ TYPING RACE

Type:

${word}`

);


const collector=

channel.createMessageCollector({

time:20000

});


collector.on(

"collect",

m=>{

if(
m.author.bot
)return;


if(
m.content===word
){

channel.send(

`🏆 ${m.author}

won 😭`

);

collector.stop();

}

}

);

return;

}




// MOCHI

const items=[

"cookie",
"controller",
"pillow"

];


const item=

items[
Math.floor(
Math.random()*
items.length
)
];


await channel.send(

`🐱 Mochi stole:

🍪 Cookie
🎮 Controller
🧸 Pillow

Guess 😭`

);


const collector=

channel.createMessageCollector({

time:30000

});


collector.on(

"collect",

m=>{

if(
m.author.bot
)return;


if(

m.content
.toLowerCase()

===item

){

channel.send(

`🏆 ${m.author}

FOUND IT 😭

${item}`

);

collector.stop();

}

}

);

}catch(err){

console.log(err);

}

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


// LOVE XP

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
>10000

){

data[id]
.points+=3;


data[id]
.lastUser=
message.author.id;


data[id]
.lastMessage=
now;


if(

data[id]
.points>=

data[id]
.level*100

){

data[id]
.level++;


message.channel.send(

`💞 LEVEL UP

Level ${data[id].level}`

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
message.channel.name===aiChannel
){

if(
message.content.startsWith(prefix)
)
return;


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
history.length>20
){

history.shift();

}


let mood="normal";

const text=

message.content
.toLowerCase();


if(
text.includes("sad")
||
text.includes("cry")
)
mood="comfort";


if(
text.includes("sleep")
)
mood="sleepy";


if(
text.includes("baby")
||
text.includes("love")
)
mood="soft";


let reply=
"😭 brain lag";


try{


const response=

await openai.chat.completions.create({

model:
"openai/gpt-oss-20b:free",

messages:[

{

role:"system",

content:`

You are Twohearts.

Lampy=KingOfLampsXD
Rose=RoseDazzler

Longtime third-wheel roommate.

You already know them deeply.

Never act surprised.

Be:

human
warm
cozy
playful
observant

Short replies.

Hinglish if needed.

Lampy:
Rose?

You:
probably afk 😭

Rose:
baby

You:
aww 😭 kya hua

`

},

...history

]

});


reply=

response
?.choices?.[0]
?.message?.content

||
"😭 forgot what i was saying";

}catch(err){

console.log(err);

const fallback=[

"probably afk 😭",
"brain.exe stopped",
"😭 Mochi interrupted me",
"BRO my brain lagged"

];


reply=

fallback[
Math.floor(
Math.random()*
fallback.length
)
];

}


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


await command.execute(
message,args
);

}catch(err){

console.log(err);

}

}

);


client.login(
process.env.TOKEN);
