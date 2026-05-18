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
args[0]?.toLowerCase() ||
"cherry";


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


const bg=
await Canvas.loadImage(
backgrounds[scene]||
backgrounds.cherry
);

ctx.drawImage(
bg,
0,
0,
1000,
600
);


const lamp=
await Canvas.loadImage(
"./skins/KingOfLampsXD.png"
);

const rose=
await Canvas.loadImage(
"./skins/RoseDazzler.png"
);


ctx.drawImage(
lamp,
220,
180,
220,
220
);

ctx.drawImage(
rose,
560,
180,
220,
220
);


ctx.font=
"40px sans-serif";

ctx.fillStyle=
"white";

ctx.fillText(
"💞 Lampy + Rose",
300,
90
);


ctx.font=
"28px sans-serif";

ctx.fillText(
"Twohearts third wheeling 😭",
300,
540
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
