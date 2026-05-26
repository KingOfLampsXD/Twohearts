const {
EmbedBuilder
}=require("discord.js");

module.exports={

name:"cantletgo",

async execute(message){

const scenes=[

[
"💞 Rose moved a little closer...",
"😭 Lampy looked at her for 2 seconds too long.",
"❤️ Eye contact established.",
"🌙 Heartbeat increased.",
"✨ Personal space has officially disappeared.",
"💖 Result: maximum blush damage."
],

[
"🌸 Rose leaned onto Lampy...",
"😭 Brain.exe stopped functioning.",
"💞 Lampy immediately held her closer.",
"❤️ Escape chances: 0%",
"🌙 Nearby air quality changed.",
"✨ Clingy level exceeded safe limits."
],

[
"💖 Late night energy activated...",
"🌙 Rose smiled.",
"😭 Critical emotional damage detected.",
"💞 Lampy forgot what he was saying.",
"❤️ Both players are now stuck together.",
"✨ Relationship combo x999"
]

];

const story=
scenes[
Math.floor(Math.random()*scenes.length)
];


const embed=
new EmbedBuilder()

.setColor("#ff7eb6")
.setTitle("💞 Can't Let Go")

.setDescription(story[0])

.setFooter({
text:"Lampy ❤️ Rose"
});

const msg=
await message.reply({
embeds:[embed]
});


for(let i=1;i<story.length;i++){

await new Promise(r=>
setTimeout(r,1800)
);

await message.channel.send(
story[i]
);

}

}

}
