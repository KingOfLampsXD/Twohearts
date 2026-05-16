const {
AttachmentBuilder
} = require("discord.js");

const Canvas=require("canvas");

module.exports={

name:"lovescene",

async execute(message,args){

const mode=
args[0]?.toLowerCase() || "cherry";

try{

await message.reply(
"okay okay 😭 making Lampy + Rose cute again..."
);

const canvas=
Canvas.createCanvas(
1200,
700
);

const ctx=
canvas.getContext("2d");


// themes

const themes={

cherry:[
"#ffb6d9",
"#ffd8ee"
],

night:[
"#1b2566",
"#0d122e"
],

campfire:[
"#ffb66d",
"#7d4533"
],

snow:[
"#daf5ff",
"#ffffff"
],

sunset:[
"#ff9966",
"#ff5ebc"
]

};

const colors=
themes[mode]
||
themes.cherry;


// background

const gradient=
ctx.createLinearGradient(
0,
0,
1200,
700
);

gradient.addColorStop(
0,
colors[0]
);

gradient.addColorStop(
1,
colors[1]
);

ctx.fillStyle=
gradient;

ctx.fillRect(
0,
0,
1200,
700
);


// decorations

ctx.font=
"35px Arial";

for(let i=0;i<35;i++){

ctx.fillText(
"💖",
Math.random()*1150,
Math.random()*500
);

}


if(mode==="night"){

ctx.font=
"100px Arial";

ctx.fillText(
"🌙",
920,
130
);

}


if(mode==="campfire"){

ctx.font=
"90px Arial";

ctx.fillText(
"🔥",
550,
500
);

}


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


// load uploaded skins

const lamp=
await Canvas.loadImage(
"./skins/lampy.png"
);

const rose=
await Canvas.loadImage(
"./skins/rose.png"
);


// place skins

ctx.drawImage(
lamp,
310,
180,
250,
350
);

ctx.drawImage(
rose,
650,
180,
250,
350
);


// title

ctx.fillStyle=
"white";

ctx.font=
"52px Arial";

ctx.fillText(
"Lampy ❤️ Rose",
390,
620
);


ctx.font=
"30px Arial";

ctx.fillText(
"made by Twohearts 😭",
450,
660
);


// send image

const attachment=
new AttachmentBuilder(
canvas.toBuffer(),
{
name:"twohearts.png"
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
