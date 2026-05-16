if(sub==="scene"){

const {
AttachmentBuilder
}=require("discord.js");

const Canvas=require("canvas");
const axios=require("axios");

async function getUUID(username){

const data=await axios.get(
`https://api.mojang.com/users/profiles/minecraft/${username}`
);

return data.data.id;

}

try{

const lampy="KingOfLampsXD";
const rose="RoseDazzler";

await message.reply(
"okay okay give me a sec 😭"
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

const gradient=
ctx.createLinearGradient(
0,0,1200,700
);

gradient.addColorStop(
0,
"#ffb6d9"
);

gradient.addColorStop(
1,
"#ffd8ee"
);

ctx.fillStyle=gradient;

ctx.fillRect(
0,
0,
1200,
700
);

for(let i=0;i<25;i++){

ctx.font="35px Arial";

ctx.fillText(
"💖",
Math.random()*1100,
Math.random()*500
);

}

const lampSkin=
await Canvas.loadImage(
`https://crafatar.com/renders/body/${lampUUID}?overlay`
);

const roseSkin=
await Canvas.loadImage(
`https://crafatar.com/renders/body/${roseUUID}?overlay`
);

ctx.drawImage(
lampSkin,
300,
220,
230,
330
);

ctx.drawImage(
roseSkin,
650,
220,
230,
330
);

ctx.font="50px Arial";

ctx.fillText(
"Lampy ❤️ Rose",
420,
620
);

const attachment=
new AttachmentBuilder(
canvas.toBuffer(),
{
name:"love.png"
}
);

return message.channel.send({

files:[attachment]

});

}catch(err){

console.log(err);

return message.reply(
"😭 scene machine exploded"
);

}

}
