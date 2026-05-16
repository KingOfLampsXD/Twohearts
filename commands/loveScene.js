const {
AttachmentBuilder
} = require("discord.js");

const Canvas = require("canvas");
const axios = require("axios");

module.exports = {

name:"loveScene",

async execute(message,args){

const mode=
args[0]?.toLowerCase() || "cherry";

const lampy="KingOfLampsXD";
const rose="RoseDazzler";

async function getUUID(username){

const data=await axios.get(
`https://api.mojang.com/users/profiles/minecraft/${username}`
);

return data.data.id;

}

try{

await message.reply(
"okay okay give me a sec 😭 cooking something cute..."
);

const lampUUID=
await getUUID(lampy);

const roseUUID=
await getUUID(rose);


const canvas=
Canvas.createCanvas(
1200,
700
);

const ctx=
canvas.getContext("2d");


// backgrounds

const gradients={

cherry:["#ffb6d9","#ffd8ee"],

night:["#1f2c77","#0d1033"],

snow:["#d7f2ff","#ffffff"],

sunset:["#ff9f7a","#ff5ebc"],

campfire:["#ffb66d","#7d4333"]

};

const selected=
gradients[mode]||
gradients.cherry;


const gradient=
ctx.createLinearGradient(
0,
0,
1200,
700
);

gradient.addColorStop(
0,
selected[0]
);

gradient.addColorStop(
1,
selected[1]
);

ctx.fillStyle=
gradient;

ctx.fillRect(
0,
0,
1200,
700
);


// floating hearts

ctx.font=
"35px Arial";

for(let i=0;i<30;i++){

ctx.fillText(
"💖",
Math.random()*1100,
Math.random()*500
);

}


// moon

if(mode==="night"){

ctx.font="100px Arial";

ctx.fillText(
"🌙",
900,
150
);

}


// snow particles

if(mode==="snow"){

for(let i=0;i<50;i++){

ctx.beginPath();

ctx.arc(
Math.random()*1200,
Math.random()*700,
3,
0,
Math.PI*2
);

ctx.fillStyle=
"white";

ctx.fill();

}

}


// skins

const lamp=
await Canvas.loadImage(
`https://crafatar.com/renders/body/${lampUUID}?overlay`
);

const roseSkin=
await Canvas.loadImage(
`https://crafatar.com/renders/body/${roseUUID}?overlay`
);


// place skins

ctx.drawImage(
lamp,
300,
220,
220,
320
);

ctx.drawImage(
roseSkin,
650,
220,
220,
320
);


ctx.font=
"50px Arial";

ctx.fillStyle=
"white";

ctx.fillText(
"Lampy ❤️ Rose",
390,
620
);


ctx.font=
"30px Arial";

ctx.fillText(
"Twohearts made this 😭",
450,
665
);


const attachment=
new AttachmentBuilder(
canvas.toBuffer(),
{
name:"twohearts-love.png"
}
);


return message.channel.send({

files:[
attachment
]

});

}catch(err){

console.log(err);

return message.reply(
"😭 scene machine exploded"
);

}

}

};
