const {
AttachmentBuilder
}=require("discord.js");

const Canvas=require("canvas");
const axios=require("axios");

module.exports={

name:"love",

async execute(message,args){

const sub=args[0]?.toLowerCase();

if(sub!=="scene") return;

const scene=args[1]?.toLowerCase()||"cherry";

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


// background gradient

const gradient=
ctx.createLinearGradient(
0,
0,
1200,
700
);

if(scene==="cherry"){

gradient.addColorStop(
0,
"#ffb6d9"
);

gradient.addColorStop(
1,
"#ffcce8"
);

}

else if(scene==="night"){

gradient.addColorStop(
0,
"#1e2a78"
);

gradient.addColorStop(
1,
"#0f1029"
);

}

else{

gradient.addColorStop(
0,
"#ffb6d9"
);

gradient.addColorStop(
1,
"#ffd5ef"
);

}

ctx.fillStyle=gradient;

ctx.fillRect(
0,
0,
1200,
700
);


// heart particles

ctx.font="40px Arial";

for(let i=0;i<25;i++){

ctx.fillText(
"💖",
Math.random()*1100,
Math.random()*500
);

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


// draw

ctx.drawImage(
lampSkin,
300,
210,
230,
340
);

ctx.drawImage(
roseSkin,
650,
210,
230,
340
);


ctx.font="50px Arial";

ctx.fillText(
"Lampy ❤️ Rose",
410,
620
);

const attachment=
new AttachmentBuilder(
canvas.toBuffer(),
{
name:"twohearts.png"
}
);

message.channel.send({

files:[
attachment
]

});

}catch(err){

console.log(err);

message.reply(
"NOOO 😭 scene machine exploded"
);

}

}
}
