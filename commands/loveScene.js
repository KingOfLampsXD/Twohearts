const {
AttachmentBuilder,
EmbedBuilder
}=require("discord.js");

const Canvas=require("canvas");

module.exports={

name:"lovescene",

async execute(message,args){

try{

const scene=
args[0]?.toLowerCase() || "cherry";


const backgrounds={

cherry:
"https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1200",

campfire:
"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",

moon:
"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",

sleepcall:
"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"

};


await message.reply(
"okay okay 😭 making Lampy + Rose..."
);


const canvas=
Canvas.createCanvas(
1000,
600
);

const ctx=
canvas.getContext("2d");


// background

const bg=
await Canvas.loadImage(

backgrounds[scene] ||
backgrounds.cherry

);

ctx.drawImage(
bg,
0,
0,
1000,
600
);


// actual minecraft body renders

const lamp=
await Canvas.loadImage(
"https://mc-heads.net/body/KingOfLampsXD/left"
);

const rose=
await Canvas.loadImage(
"https://mc-heads.net/body/RoseDazzler/right"
);


// little shadow things

ctx.globalAlpha=.25;

ctx.fillStyle="black";

ctx.beginPath();

ctx.ellipse(
340,
500,
100,
30,
0,
0,
Math.PI*2
);

ctx.fill();

ctx.beginPath();

ctx.ellipse(
650,
500,
100,
30,
0,
0,
Math.PI*2
);

ctx.fill();

ctx.globalAlpha=1;


// characters

ctx.drawImage(
lamp,
220,
170,
220,
320
);

ctx.drawImage(
rose,
540,
170,
220,
320
);


// title

ctx.font=
"bold 42px sans-serif";

ctx.fillStyle=
"white";

ctx.strokeStyle=
"black";

ctx.lineWidth=6;

ctx.strokeText(
"💞 Lampy + Rose",
280,
70
);

ctx.fillText(
"💞 Lampy + Rose",
280,
70
);


// bottom text

ctx.font=
"28px sans-serif";

ctx.strokeText(
"Twohearts third wheeling 😭",
280,
550
);

ctx.fillText(
"Twohearts third wheeling 😭",
280,
550
);


// hearts

ctx.font="45px sans-serif";

ctx.fillText(
"💖",
470,
220
);

ctx.fillText(
"✨",
510,
180
);


const attachment=
new AttachmentBuilder(

canvas.toBuffer(),

{

name:
"scene.png"

}

);


const embed=
new EmbedBuilder()

.setColor(
"#ff7eb6"
)

.setTitle(
"💞 Couple Scene"
)

.setDescription(
`Scene: ${scene}`
)

.setImage(
"attachment://scene.png"
);


return message.reply({

embeds:[
embed
],

files:[
attachment
]

});

}catch(err){

console.log(err);

message.reply(
`😭 ${err.message}`
);

}

}

};
