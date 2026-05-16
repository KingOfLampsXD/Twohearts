const { EmbedBuilder } = require("discord.js");

module.exports = {

name:"lovescene",

async execute(message,args){

const mode=
args[0]?.toLowerCase() || "cherry";

const scenes={

cherry:
"https://minecraft.wiki/images/Cherry_Grove.png",

night:
"https://wallpapercave.com/wp/wp9766325.jpg",

snow:
"https://wallpapercave.com/wp/wp7487156.jpg",

sunset:
"https://wallpapercave.com/wp/wp9024134.jpg",

campfire:
"https://wallpapercave.com/wp/wp11067583.jpg"

};

const image=
scenes[mode] || scenes.cherry;

const embed=
new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle("💞 Lampy + Rose")

.setDescription(
"okay okay 😭 tiny romantic scene delivered"
)

.setImage(image)

.setFooter({
text:"Twohearts third-wheeling again 😭"
});

return message.reply({
embeds:[embed]
});

}

};
