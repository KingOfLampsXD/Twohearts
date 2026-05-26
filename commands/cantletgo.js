const {
EmbedBuilder
}=require("discord.js");

module.exports={

name:"cantletgo",
aliases:["clingy"],

async execute(message){

const scenes=[

[
"🌙 Late night mode activated...",
"💞 Rose moved a little closer.",
"😭 Lampy noticed instantly.",
"...then looked away.",
"...then looked back.",
"❤️ Eye contact lasted a little too long.",
"🌸 Rose leaned against him.",
"💖 Lampy immediately pulled her closer.",
"✨ Personal space is no longer available.",
"😭 Brain.exe stopped functioning.",
"💞 Status: absolutely inseparable."
],

[
"💖 Relationship warning...",
"🌙 Rose smiled.",
"😭 Critical mistake.",
"❤️ Heartbeat increased immediately.",
"💞 Distance between them slowly disappeared.",
"🌸 Silence somehow became louder.",
"✨ Nearby atmosphere changed.",
"😭 Escape chances: 0%",
"💖 Affection level: MAX"
]

];

const story=
scenes[Math.floor(Math.random()*scenes.length)];

const embed=
new EmbedBuilder()
.setColor("#ff7eb6")
.setTitle("💞 Can't Let Go")
.setDescription(story[0])
.setFooter({
text:"Lampy ❤️ Rose"
});

await message.reply({
embeds:[embed]
});

for(let i=1;i<story.length;i++){

await new Promise(
r=>setTimeout(r,1700)
);

await message.channel.send(
story[i]
);

}

}

}
