const {
EmbedBuilder
}=require("discord.js");

const YouTube=
require("youtube-sr").default;

module.exports={

name:"youtube",
aliases:["yt","creator","creators"],

async execute(message){

try{

const lampy=
await YouTube.searchOne(
"@imlampy-r5x"
);

const rose=
await YouTube.searchOne(
"@itzrosefx"
);


const embed=
new EmbedBuilder()

.setColor("#ff4f9d")

.setTitle(
"📺 Lampy ❤️ Rose Creator Hub"
)

.setDescription(
"💞 Live creator stats"
)

.addFields(

{
name:"🔥 I'm Lampy",

value:

`👥 Subs:
${lampy?.subscriberCount || "Unknown"}

🎬 Channel:
${lampy?.channel?.name || "I'm Lampy"}

🔗
https://youtube.com/@imlampy-r5x`,

inline:true
},

{
name:"🌸 RoseFX",

value:

`👥 Subs:
${rose?.subscriberCount || "Unknown"}

🎬 Channel:
${rose?.channel?.name || "RoseFX"}

🔗
https://youtube.com/@itzrosefx`,

inline:true
}

)

.setThumbnail(
lampy?.thumbnail?.url ||
null
)

.setFooter({

text:
"RL!youtube • Lampy ❤️ Rose"

});

message.reply({
embeds:[embed]
});

}catch(err){

console.log(err);

message.reply(
`😭 ${err.message}`
);

}

}

};
