const { EmbedBuilder } = require("discord.js");

module.exports={

name:"lovescene",

async execute(message,args){

const scene=
args.join(" ") || "cherry blossom minecraft date";

const prompt=
encodeURIComponent(
`Minecraft romantic couple scene of Lampy and Rose, ${scene}, cozy, cherry blossoms, cinematic, cute`
);

const image=
`https://image.pollinations.ai/prompt/${prompt}`;

const embed=
new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle("💞 Lampy + Rose Scene")

.setDescription(
"okay okay 😭 Twohearts cooked something..."
)

.setImage(image)

.setFooter({

text:
"third wheeling again 🎀"

});

return message.reply({

embeds:[embed]

});

}

};
