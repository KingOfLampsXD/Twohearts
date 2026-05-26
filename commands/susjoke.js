const {
EmbedBuilder
}=require("discord.js");

module.exports={

name:"joke",
aliases:["dirtyjoke","sus"],

async execute(message){

const jokes=[

"🌙 Rose: 'come closer.'\n😭 Lampy: 'for what exactly...?'",

"💞 Relationship report:\nstarted with holding hands...\nnow personal space no longer exists.",

"❤️ Rose sat a little closer.\nLampy brain: 'stay calm bro stay calm'",

"😭 Late night rule:\nif Rose says '5 more minutes'...\nit's never 5 minutes.",

"🌸 Rose: '*looks at Lampy*'\nLampy heart rate: 📈📈📈📈",

"💖 Twohearts warning:\nserious eye contact detected.\nOutcome: absolute chaos.",

"😭 Bedroom energy activated:\nNobody spoke.\nBoth became extremely aware of each other's existence.",

"💞 Rose smiled.\nLampy immediately forgot every thought he had.",

"🌙 Relationship difficulty:\ntrying to act normal around your favorite person.",

"❤️ Lampy: 'I'm completely fine.'\nNarrator: he was NOT completely fine."

];


const joke=
jokes[Math.floor(
Math.random()*jokes.length
)];

const embed=
new EmbedBuilder()

.setColor("#ff4f9d")
.setTitle("😳 Sus Joke")

.setDescription(joke)

.setFooter({
text:"Lampy ❤️ Rose late night energy"
});


message.reply({
embeds:[embed]
});

}

}
