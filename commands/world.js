const fs=require("fs");

module.exports={

name:"world",

async execute(message,args){

const action=args[0]?.toLowerCase();

const path="./world.json";

let data;

if(fs.existsSync(path)){

data=JSON.parse(
fs.readFileSync(path)
);

}else{

data={

xp:0,
level:1,
title:"Tiny Beans",

stats:{}

};

}


const games={

vc:[10,"📞 another vc arc happened 😭"],
movie:[8,"🎬 movie night added"],
roblox:[9,"🎮 roblox chaos logged"],
minecraft:[12,"⛏ minecraft date energy"],
sleep:[8,"🌙 sleep call arc"],
cuddle:[6,"🫂 comfort increased"],
date:[15,"💕 date completed"],
meme:[5,"😂 meme addiction growing"],
music:[7,"🎵 music session added"],
hug:[4,"💞 hug energy"],
kiss:[5,"😭 illegal cuteness"],
challenge:[8,"⚔ couple challenge complete"],
truth:[6,"👀 truth survived"],
dare:[7,"😈 chaos accepted"],
battle:[9,"⚡ battle recorded"],
guess:[6,"🤔 guessing arc"],
fortune:[5,"✨ fate updated"],
night:[5,"🌌 late night vibes"],
call:[8,"📱 call logged"],
pic:[7,"📸 memory unlocked"],
gift:[10,"🎁 wholesome detected"],
insidejoke:[9,"😭 inside joke expanded"],
walk:[7,"🚶 tiny walk energy"],
sleepy:[4,"😴 eepy detected"],
comfort:[8,"🤍 comfort mode"],
song:[6,"🎶 couple soundtrack updated"],
pet:[7,"🐰 Mochi approves"],
mission:[9,"🏆 mission complete"],
laugh:[5,"😂 laugh counter increased"],
chaos:[10,"💥 chaos level rising"]

};


const titles={

2:"VC Goblins",
3:"Sleep Call Survivors",
5:"Minecraft Soulmates",
7:"Chaos Couple",
10:"Legendary Duo",
15:"Infinite Love DLC",
20:"Lampy + Rose Arc Masters"

};


function save(){

while(data.xp>=100){

data.xp-=100;

data.level++;

if(
titles[data.level]
){

data.title=
titles[data.level];

}

}

fs.writeFileSync(
path,
JSON.stringify(
data,null,2)
);

}


if(action==="stats"){

let text="";

for(const key in data.stats){

text+=
`${key}: ${data.stats[key]}\n`;

}

return message.reply(

`💞 Lampy + Rose World

⭐ Level: ${data.level}
✨ XP: ${data.xp}/100
🏆 ${data.title}

${text || "No activities yet 😭"}`
);

}


if(!games[action]){

return message.reply(

`RL!world stats

Activities:

vc
movie
roblox
minecraft
sleep
cuddle
date
meme
music
hug
kiss
challenge
truth
dare
battle
guess
fortune
night
call
pic
gift
insidejoke
walk
sleepy
comfort
song
pet
mission
laugh
chaos`
);

}


if(!data.stats[action]){

data.stats[action]=0;

}

data.stats[action]++;

data.xp+=games[action][0];

save();

return message.reply(

`${games[action][1]}

+${games[action][0]} XP 💞

Total ${action}: ${data.stats[action]}`

);

}

};
