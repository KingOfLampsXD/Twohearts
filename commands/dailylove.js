const { EmbedBuilder } = require('discord.js');

const loveMessages=[

"❤️ You are deeply loved.",
"🌸 Your smile is beautiful.",
"💖 You make someone's world brighter.",
"💕 Never forget your worth.",
"✨ You're amazing just the way you are.",
"💞 Someone cares about you a lot.",
"🥺 You deserve happiness.",
"🌙 You're special to many people.",
"💘 Keep shining.",
"🫶 You matter more than you know."

];

module.exports={

name:"dailylove",

async execute(message,args){

const randomMessage=

loveMessages[
Math.floor(
Math.random()*
loveMessages.length
)
];

const embed=
new EmbedBuilder()

.setTitle(
"💌 Daily Love Message"
)

.setDescription(
randomMessage
)

.setColor(
"#ff7eb6"
)

.setFooter({

text:
`Requested by ${message.author.username}`

});

await message.reply({

embeds:[
embed
]

});

}

};
