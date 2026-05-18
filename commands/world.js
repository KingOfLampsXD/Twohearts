const fs=require("fs");
const {EmbedBuilder}=require("discord.js");

module.exports={

name:"world",

async execute(message,args){

const action=args[0]?.toLowerCase();
const path="./world.json";

let data=
fs.existsSync(path)
?
JSON.parse(fs.readFileSync(path))
:
null;

function save(){

fs.writeFileSync(
path,
JSON.stringify(data,null,2)
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
xp:0,
bond:50,
hearts:0,
coins:50,

title:"Tiny Beans",

rank:"Strangers 😭",

arc:"Beginning Days",

home:"Tiny Room",

place:"Town",

pet:null,

inventory:[],

quests:[],

completed:0,

weather:"☀️ Sunny",

event:null

};

save();

return message.reply(

`💞 Lampy + Rose World started

🏠 Tiny Room
🪙 50 coins
❤️ Bond:50

RL!world next 😭`

);

}



if(action==="reset"){

if(fs.existsSync(path))
fs.unlinkSync(path);

return message.reply(
"💔 entire world deleted 😭"
);

}



if(!data){

return message.reply(
"RL!world start"
);

}



const weather=[

"☀️ Sunny",
"🌧 Rain",
"🌙 Sleepy Night",
"🌸 Cherry Petals",
"⛈ Chaos Weather",
"✨ Cozy Vibes"

];


data.weather=
weather[
Math.floor(
Math.random()*
weather.length
)
];



const events=[

{

title:"🌸 Cherry Arc",

text:
"you found sleeping cat",

choices:[
"adopt",
"pet",
"run"
],

results:[

{
bond:10,
pet:"Mochi",
text:"🐱 Mochi joined"
},

{
hearts:20,
text:"💞 cuteness damage"
},

{
bond:-5,
text:"😭 cat sadness"
}

]

},

{

title:"🌙 Sleep Call",

text:
"2am choices appeared",

choices:[
"talk",
"sleep",
"memes"
],

results:[

{
bond:10,
text:"💖 comfort increased"
},

{
hearts:10,
text:"🌙 healthy choice"
},

{
coins:10,
text:"😂 meme reward"
}

]

},

{

title:"🎮 Roblox Chaos",

text:
"cursed game discovered",

choices:[
"join",
"escape",
"embrace"
],

results:[

{
coins:25,
text:"🪙 victory"
},

{
bond:-2,
text:"😭 fear"
},

{
hearts:30,
text:"💥 chaos energy"
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

🌦 ${data.weather}

${event.text}

1. ${event.choices[0]}
2. ${event.choices[1]}
3. ${event.choices[2]}

RL!world choose 1`

);

}



if(action==="choose"){

if(!data.event)
return message.reply(
"😭 no event"
);

const num=
parseInt(args[1])-1;

if(isNaN(num)||num<0||num>2)
return message.reply(
"pick 1-3 😭"
);


const r=
data.event.results[num];

if(r.bond)
data.bond+=r.bond;

if(r.hearts)
data.hearts+=r.hearts;

if(r.coins)
data.coins+=r.coins;

if(r.pet)
data.pet=r.pet;

if(r.item)
data.inventory.push(r.item);


data.xp+=25;
data.completed++;

while(data.xp>=100){

data.xp-=100;

data.level++;

}


if(data.bond>=70)
data.rank="Soulmates 💞";

if(data.bond>=120)
data.rank="Unseparable 😭";

if(data.level>=3){

data.home=
"Cozy Cabin";

data.place=
"Cherry Hills";

}

if(data.level>=7){

data.home=
"Dream House";

data.place=
"Love Forest";

}

save();

data.event=null;

return message.reply(

`${r.text}

⭐ Level:${data.level}
✨ XP:${data.xp}/100
❤️ Bond:${data.bond}
🪙 Coins:${data.coins}
🏆 ${data.rank}`

);

}



if(action==="daily"){

const reward=
Math.floor(
Math.random()*50
)+20;

data.coins+=reward;

save();

return message.reply(

`🎁 Daily reward

+${reward} coins

🪙 Total:${data.coins}`

);

}



if(action==="pet"){

return message.reply(

data.pet
?
`🐱 ${data.pet}

level:
${data.level}

mood:
sleepy 😭`
:
"😭 no pet yet"

);

}



if(action==="stats"){

const bar=
"❤️".repeat(
Math.floor(
data.bond/10
)
);

const embed=
new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"💞 Lampy + Rose World"
)

.setDescription(

`🏆 ${data.rank}

⭐ Level:${data.level}
✨ XP:${data.xp}/100

❤️ Bond:${data.bond}

${bar}

🪙 Coins:${data.coins}

🏠 ${data.home}

🌎 ${data.place}

🌦 ${data.weather}

🐱 ${
data.pet||
"none"
}`

);

return message.reply({

embeds:[embed]

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



return message.reply(

`💞 RL!world

start
next
choose 1
stats
daily
pet
inventory
reset`

);

}

};
