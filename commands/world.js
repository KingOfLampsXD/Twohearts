const fs=require("fs");
const {
EmbedBuilder
}=require("discord.js");

module.exports={

name:"world",

async execute(message,args){

const action=
args[0]?.toLowerCase();

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
coins:25,

title:"Tiny Beans",

arc:"Beginning Days",

home:"Tiny Room",

place:"Town",

inventory:[],

completed:0,

event:null

};

save();

return message.reply(

`💞 Lampy + Rose world started

🏠 Tiny Room
🪙 Coins:25
❤️ Bond:50

use RL!world next 😭`

);

}



if(action==="reset"){

if(fs.existsSync(path)){

fs.unlinkSync(path);

}

return message.reply(
"💔 world deleted 😭 start again together"
);

}



if(!data){

return message.reply(
"RL!world start"
);

}


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

results:[

{
bond:5,
item:"Tiny Plush",
text:"🧸 Tiny Plush found"
},

{
coins:10,
text:"🪙 found hidden coins"
},

{
item:"Mystery Box",
text:"📦 saved mystery box"
}

]

},


{

title:"🌙 Sleep Call Arc",

text:
"you both accidentally stayed awake",

choices:[

"talk more",

"sleep now",

"watch memes"

],

results:[

{
bond:10,
text:"💞 comfort increased"
},

{
hearts:15,
text:"🌙 healthy choice"

},

{

item:"Meme Memory",

text:
"😂 meme memory unlocked"

}

]

},

{

title:"🎮 Roblox Chaos",

text:
"cursed game discovered",

choices:[

"play",

"run",

"embrace chaos"

],

results:[

{

coins:20,

text:
"🎮 won something"

},

{

bond:-2,

text:
"😭 cowards"

},

{

hearts:20,

text:
"💥 chaos energy"

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
"😭 no event"
);

}

const num=
parseInt(args[1])-1;

if(
isNaN(num)
||
num<0
||
num>2
){

return message.reply(
"pick 1-3 😭"
);

}

const result=
data.event.results[num];

if(result.bond)
data.bond+=result.bond;

if(result.coins)
data.coins+=result.coins;

if(result.hearts)
data.hearts+=result.hearts;

if(result.item){

data.inventory.push(
result.item
);

}


data.completed++;


while(
data.hearts>=100
){

data.hearts-=100;

data.level++;

}


if(data.level>=3){

data.home=
"Cozy Cabin";

data.place=
"Cherry Hills";

}


if(data.level>=5){

data.title=
"Professional Sleep Call Survivors";

}


if(data.level>=8){

data.place=
"Love Forest";

data.home=
"Dream House";

}


const text=
result.text;

data.event=null;

save();

return message.reply(

`${text}

⭐ Level:${data.level}
❤️ Bond:${data.bond}
💞 Hearts:${data.hearts}/100
🪙 Coins:${data.coins}`

);

}



if(action==="stats"){

const embed=
new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"💞 Lampy + Rose World"
)

.setDescription(

`⭐ Level: ${data.level}

❤️ Bond: ${data.bond}

💞 Hearts: ${data.hearts}/100

🪙 Coins: ${data.coins}

🏠 Home: ${data.home}

🌎 Place: ${data.place}

🏆 ${data.title}

📖 Arc:
${data.arc}`

);

return message.reply({

embeds:[
embed
]

});

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

const homes={

"Tiny Room":
"🛏 single room\n🧸 empty shelf",

"Cozy Cabin":
"🪟 warm windows\n🌙 sleep corner\n🧸 plush shelf",

"Dream House":
"🌸 cherry garden\n🐰 mochi room\n💡 lamp collection"

};

return message.reply(

`🏠 ${data.home}

${homes[data.home]}`

);

}



if(action==="map"){

return message.reply(

`🌎 World

🏠 Town

🌸 Cherry Hills

🌲 Love Forest

🌙 Dream District`

);

}



if(action==="scene"){

const scenes=[

"https://images.unsplash.com/photo-1506744038136-46273834b3fb",

"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",

"https://images.unsplash.com/photo-1507525428034-b723cf961d3e"

];

const embed=
new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
`📸 ${data.place}`
)

.setDescription(
"Twohearts dragged Lampy + Rose somewhere 😭"
)

.setImage(
scenes[
Math.floor(
Math.random()*scenes.length
)
]
);

return message.reply({

embeds:[
embed
]

});

}



return message.reply(

`💞 RL!world

start
next
choose 1
stats
inventory
home
map
scene
reset`

);

}

};
