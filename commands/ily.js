const {
EmbedBuilder
}=require("discord.js");

module.exports={

name:"iloveyou1000",

async execute(message){

const loveLine =
"I love you Rose ❤️ ";

const giantLove =
loveLine.repeat(100);

const embed =
new EmbedBuilder()

.setColor("#ff4f9d")

.setTitle(
"💞 Love Overflow.exe"
)

.setDescription(

`Rose...

I don't think 1000 times is enough.

${giantLove}

❤️ Count: 1000+
💌 Sender: Lampy
🌹 Target: Rose
💍 Status: Still not enough "I love you"s.`

)

.setFooter({
text:"Lampy ❤️ Rose Forever"
});

message.reply({
embeds:[embed]
});

}

};
