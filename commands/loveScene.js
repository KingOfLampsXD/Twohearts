const { EmbedBuilder } = require("discord.js");

module.exports = {

name:"lovescene",

async execute(message,args){

const mode=
args[0]?.toLowerCase() || "cherry";

const scenes={

cherry:
"https://mc-heads.net/body/KingOfLampsXD/left",

night:
"https://mc-heads.net/body/RoseDazzler/right",

campfire:
"https://mc-heads.net/combo/KingOfLampsXD/RoseDazzler",

snow:
"https://mc-heads.net/combo/KingOfLampsXD/RoseDazzler",

sunset:
"https://mc-heads.net/combo/KingOfLampsXD/RoseDazzler"

};

const embed=
new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle("💞 Lampy + Rose")

.setDescription(
"okay okay 😭 made you two again"
)

.setImage(
scenes[mode] ||
scenes.cherry
)

.setFooter({
text:"Twohearts third-wheeling again 😭"
});

return message.reply({

embeds:[embed]

});

}

};
