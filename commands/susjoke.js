const {
EmbedBuilder
}=require("discord.js");

module.exports={

name:"susjoke",
aliases:["dirtyjoke"],

async execute(message){

const jokes=[

"😭 Rose: 'come closer.' \nLampy: *system immediately overheats*",

"💞 Relationship status:\nstarted with 'hi' and somehow became daily brain occupation.",

"🌙 Rose: 'we need to talk.'\nLampy heart rate: 📈📈📈",

"💖 Lampy: 'I can explain.'\nNarrator: he could not explain.",

"😭 Eye contact lasted 3 seconds.\nBoth players affected by emotional damage.",

"💞 Warning:\nToo much flirting may cause accidental marriage.",

"🌸 Rose smiled.\nLampy CPU usage: 99%"

];

const joke=
jokes[Math.floor(
Math.random()*jokes.length
)];

const embed=
new EmbedBuilder()

.setColor("#ff7eb6")
.setTitle("😳 Sus Joke")
.setDescription(joke)
.setFooter({
text:"Twohearts being a menace 😭"
});

message.reply({
embeds:[embed]
});

}

}
