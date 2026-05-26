const {
EmbedBuilder
}=require("discord.js");

module.exports={

name:"cantletgo",

async execute(message){

const moments=[

"😭 Lampy wrapped Rose in maximum clingy mode",
"💞 escape attempt detected... denied",
"🌸 Rose leaned closer and stayed",
"💖 affection overflow reached dangerous levels",
"🌙 forehead touch activated"

];

const msg=
moments[
Math.floor(
Math.random()*moments.length
)];

const embed=
new EmbedBuilder()

.setColor("#ff7eb6")
.setTitle("💞 Can't Let Go")
.setDescription(msg+"\n\n+999 love energy")
.setFooter({
text:"Lampy ❤️ Rose"
});

message.reply({
embeds:[embed]
});

}

}
