const fs=require("fs");

module.exports={

name:"world",

async execute(message,args){

const action=args[0]?.toLowerCase();

const path="./world.json";

let data;

if(fs.existsSync(path)){

data=
JSON.parse(
fs.readFileSync(path)
);

}else{

data=null;

}


function save(){

fs.writeFileSync(
path,
JSON.stringify(
data,null,2)
);

}


if(action==="start"){

if(data){

return message.reply(
"😭 world already exists"
);

}

data={

level:1,
bond:50,
hearts:0,
mood:"cozy",
arc:"Beginning Days",

home:"Tiny Room",

inventory:[],

wins:0,

event:null,

titles:[
"tiny beans"
]

};

save();

return message.reply(

`💞 Lampy + Rose world started

🏠 Tiny Room unlocked
❤️ Bond: 50
⭐ Level:1

use RL!world next 😭`

);

}


if(!data){

return message.reply(
"RL!world start"
);

}


// random world events

const events=[

{

title:"🌧 Rainy Evening",

text:
"Rose found a mysterious box",

choices:[

"Open it",

"Ignore it",

"Save for later"

],

effects:[

()=>{

data.inventory.push(
"Tiny Plush"
);

data.bond+=5;

},

()=>{

data.hearts+=2;

},

()=>{

data.inventory.push(
"Mystery Box"
);

}

]

},

{

title:"🌙 Late Night VC",

text:
"Lampy and Rose stayed awake too long",

choices:[

"keep talking",

"go sleep",

"watch memes"

],

effects:[

()=>{

data.bond+=10;

},

()=>{

data.hearts+=5;

},

()=>{

data.inventory.push(
"Meme Memory"
);

}

]

},

{

title:"🎮 Roblox Chaos",

text:
"both of you found a cursed game",

choices:[

"play it",

"run",

"invite chaos"

],

effects:[

()=>{

data.hearts+=15;

},

()=>{

data.bond-=2;

},

()=>{

data.wins++;

}

]

}

];


if(action==="next"){

const event=

events[
Math.floor(
Math.random()*
events.length
)
];

data.event=event;

save();

return message.reply(

`${event.title}

${event.text}

1. ${event.choices[0]}
2. ${event.choices[1]}
3. ${event.choices[2]}

RL!world choose 1`

);

}



if(action==="choose"){

if(!data.event){

return message.reply(
"😭 no event active"
);

}

const num=
parseInt(args[1])-1;

if(
num<0
||
num>2
){

return message.reply(
"pick 1-3"
);

}


data.event.effects[num]();

data.hearts+=10;


if(data.hearts>=100){

data.level++;

data.hearts=0;

}


if(data.level===3){

data.home=
"Cozy Cabin";

}


if(data.level===5){

data.titles.push(
"Professional Sleep Call Survivors"
);

}


data.event=null;

save();

return message.reply(

`choice complete 😭

⭐ Level:${data.level}
❤️ Bond:${data.bond}
💞 Hearts:${data.hearts}/100`

);

}



if(action==="stats"){

return message.reply(

`💞 Lampy + Rose

⭐ Level:${data.level}

❤️ Bond:${data.bond}

💞 Hearts:${data.hearts}/100

🌙 Arc:${data.arc}

🏠 Home:${data.home}

🏆 ${
data.titles.join(", ")
}`

);

}



if(action==="inventory"){

return message.reply(

`🎒 Inventory

${
data.inventory.length
?
data.inventory.join("\n")
:
"empty 😭"
}`

);

}


if(action==="home"){

return message.reply(

`🏠 ${data.home}

Unlocked:

🧸 Plush Shelf
🌙 Sleep Corner
💡 Lamp Collection`

);

}


return message.reply(

`RL!world start
RL!world next
RL!world choose 1
RL!world stats
RL!world inventory
RL!world home`

);

}

};
