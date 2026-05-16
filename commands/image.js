const { EmbedBuilder } = require("discord.js");

module.exports = {
name: "love",

async execute(message,args){

const sub=args[0]?.toLowerCase();

if(sub!=="scene") return;

const lampy="KingOfLampsXD";
const rose="RoseDazzler";

const scene=args[1]?.toLowerCase() || "random";

const scenes={

cherry:{
msg:"okay okay give me a sec 😭 making Lampy and Rose under cherry blossoms",
bg:"🌸 moonlit cherry blossom date"
},

night:{
msg:"late-night mode activated 😭",
bg:"🌙 stars + lantern date"
},

campfire:{
msg:"cozy mode incoming",
bg:"🔥 campfire cuddle scene"
},

wedding:{
msg:"WAIT HOLD ON 😭",
bg:"💍 minecraft wedding"
},

cabin:{
msg:"tiny cozy cabin loading",
bg:"🏡 wooden cabin date"
},

snow:{
msg:"cold outside warm inside energy",
bg:"❄️ snowy cuddle scene"
}

};

const keys=Object.keys(scenes);

const picked=
scene==="random"
? scenes[keys[Math.floor(Math.random()*keys.length)]]
: scenes[scene] || scenes.cherry;


// skin body renders
const lampySkin=
`https://crafatar.com/renders/body/${lampy}?overlay`;

const roseSkin=
`https://crafatar.com/renders/body/${rose}?overlay`;

const embed=
new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle("💞 Twohearts Scene")

.setDescription(

`${picked.msg}

${picked.bg}

Lampy ❤️ Rose forever`
)

.addFields(
{
name:"🧸 Lampy",
value:`${lampy}`,
inline:true
},
{
name:"🌸 Rose",
value:`${rose}`,
inline:true
}
)

.setImage(
`https://mc-heads.net/banner/${lampy}/${rose}`
)

.setFooter({
text:"Twohearts has seen this love arc before 😭"
})

.setTimestamp();

message.reply({
embeds:[embed]
});

}
};
