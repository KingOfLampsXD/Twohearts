const {
EmbedBuilder
}=require("discord.js");

module.exports={

name:"punishment",

async execute(message){

const embed=
new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"💌 Sorry Rose..."
)

.setDescription(
https://spin-o-rama-ouch.lovable.app
)

.setFooter({
text:"Lampy ❤️ Rose"
});

message.reply({
embeds:[embed]
});

}

};
