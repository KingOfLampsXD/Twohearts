const { AttachmentBuilder } = require("discord.js");
const Canvas = require("canvas");
const axios = require("axios");

module.exports = {

name:"lovescene",

async execute(message,args){

const mode=
args[0]?.toLowerCase() || "cherry";

const lampy="KingOfLampsXD";
const rose="RoseDazzler";


async function getUUID(username){

const data=
await axios.get(
`https://api.mojang.com/users/profiles/minecraft/${username}`
);

return data.data.id;

}


try{

await message.reply(
"okay okay give me a sec 😭 cooking Lampy + Rose..."
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


// scene colors

const themes={

cherry:[
"#ffb6d9",
"#ffd8ee"
],

night:[
"#1d2f70",
"#0f132f"
],

snow:[
"#d9f3ff",
"#ffffff"
],

sunset:[
"#ff9966",
"#ff5ebc"
],

campfire:[
"#ffb66d",
"#7a4533"
]

};


const selected=
themes[mode] ||
themes.cherry;


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

for(let i=0;i<25;i++){

ctx.fillText(
"💖",
Math.random()*1100,
Math.random()*500
);

}


// night moon

if(mode==="night"){

ctx.font=
"100px Arial";

ctx.fillText(
"🌙",
920,
130
);

}


// snow particles

if(mode==="snow"){

for(let i=0;i<60;i++){

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

const lampSkin=
await Canvas.loadImage(
`https://crafatar.com/renders/body/${lampUUID}?overlay`
);

const roseSkin=
await Canvas.loadImage(
`https://crafatar.com/renders/body/${roseUUID}?overlay`
);


// place skins

ctx.drawImage(
lampSkin,
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


// title

ctx.fillStyle=
"white";

ctx.font=
"50px Arial";

ctx.fillText(
"Lampy ❤️ Rose",
390,
620
);


ctx.font=
"28px Arial";

ctx.fillText(
"made by Twohearts 😭",
460,
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
