const {
EmbedBuilder
}=require("discord.js");

module.exports={

name:"creators",
aliases:["yt","youtube"],

async execute(message){

const embed=
new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"📺 Lampy ❤️ Rose Channels"
)

.setDescription(

`💞 Official creator corner

🌙 Twohearts supports relationship chaos`

)

.addFields(

{
name:"🔥 Lampy",

value:
"📺 https://youtube.com/@imlampy-r5x\n🎮 Minecraft chaos + edits",

inline:false
},

{
name:"🌸 Rose",

value:
"📺 https://youtube.com/@itzrosefx\n💖 Rose FX energy",

inline:false
},

{
name:"😭 Twohearts says",

value:
"Subscribe or Mochi becomes sad."

}

)

.setFooter({

text:"Lampy ❤️ Rose forever"

});

message.reply({

embeds:[embed]

});

}

}
