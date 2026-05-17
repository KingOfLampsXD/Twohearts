const fs=require("fs");

module.exports={

name:"world",

async execute(message,args){

const action=
args[0]?.toLowerCase();

const path=
"./world.json";


let data;

if(fs.existsSync(path)){

data=
JSON.parse(
fs.readFileSync(path)
);

}else{

data={

love:0,
level:1,

vc:0,
movie:0,
roblox:0,
minecraft:0,
cuddle:0,
sleep:0,
date:0,

title:
"tiny beans"

};

}


function save(){

while(
data.love>=100
){

data.love-=100;

data.level++;

const unlocks={

2:"VC Goblins",

3:"Professional Sleep Callers",

5:"Minecraft Soulmates",

7:"Chaos Couple",

10:"Legendary Duo"

};

if(
unlocks[data.level]
){

data.title=
unlocks[
data.level
];

}

}

fs.writeFileSync(
path,
JSON.stringify(
data,
null,
2
)
);

}


const rewards={

vc:10,
movie:8,
roblox:9,
minecraft:12,
cuddle:6,
sleep:7,
date:15

};


if(action==="stats"){

return message.reply(

`💞 Lampy + Rose World

⭐ Level: ${data.level}
✨ XP: ${data.love}/100

🏆 ${data.title}

📞 VC: ${data.vc}
🎬 Movies: ${data.movie}
🎮 Roblox: ${data.roblox}
⛏ Minecraft: ${data.minecraft}
🫂 Cuddles: ${data.cuddle}
🌙 Sleep Calls: ${data.sleep}
💕 Dates: ${data.date}`

);

}


if(!rewards[action]){

return message.reply(

`use:

RL!world stats
RL!world vc
RL!world movie
RL!world roblox
RL!world minecraft
RL!world cuddle
RL!world sleep
RL!world date`

);

}


data[action]++;

data.love+=
rewards[action];

save();


const reactions={

vc:
"another VC arc unlocked 😭",

movie:
"movie night added",

roblox:
"chaos detected",

minecraft:
"minecraft date energy",

cuddle:
"maximum comfort achieved",

sleep:
"professional sleep callers 😭",

date:
"awww 😭"

};


return message.reply(

`${reactions[action]}

+${rewards[action]} love XP 💞`

);

}

};
