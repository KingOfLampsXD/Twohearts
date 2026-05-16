const {
AttachmentBuilder
} = require("discord.js");

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

const backgrounds={

cherry:"https://i.imgur.com/yvVpHbl.jpg",

night:"https://i.imgur.com/JlQ6b8D.jpg",

campfire:"https://i.imgur.com/FR6RMwQ.jpg",

snow:"https://i.imgur.com/FJmXQhF.jpg",

sunset:"https://i.imgur.com/55Y7WSM.jpg"

};

const bg=
backgrounds[scene]||
backgrounds.cherry;

const canvas=
Canvas.createCanvas(
1200,
675
);

const ctx=
canvas.getContext("2d");


// background

const bgData=
await axios.get(bg,{
responseType:"arraybuffer"
});

const background=
await Canvas.loadImage(
Buffer.from(bgData.data)
);

ctx.drawImage(
background,
0,
0,
1200,
675
);


// minecraft renders

const lampImg=
await Canvas.loadImage(
`https://crafatar.com/renders/body/${lampy}?overlay`
);

const roseImg=
await Canvas.loadImage(
`https://crafatar.com/renders/body/${rose}?overlay`
);


// place characters

ctx.drawImage(
lampImg,
340,
240,
220,
320
);

ctx.drawImage(
roseImg,
620,
240,
220,
320
);


// hearts

ctx.font="60px Arial";

ctx.fillText(
"💞",
560,
230
);

ctx.font="32px Arial";

ctx.fillText(
"Lampy ❤️ Rose",
430,
620
);


const attachment=
new AttachmentBuilder(
canvas.toBuffer(),
{
name:"twohearts.png"
}
);

message.reply({

content:
"okay okay give me a sec 😭",

files:[
attachment
]

});

}
};
