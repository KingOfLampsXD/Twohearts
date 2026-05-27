const {
EmbedBuilder
}=require("discord.js");

const yt=
require("yt-channel-info");

module.exports={

name:"youtube",
aliases:["yt"],

async execute(message){

try{

const lampy=
await yt.getChannelInfo(
"UCn8M5x4qM4V0A4L3M4Y4Y8Q"
);

const rose=
await yt.getChannelInfo(
"UCM4x7R2K4A9Q6J8Y2L1R9Q"
);


const embed=
new EmbedBuilder()

.setColor("#ff4f9d")

.setTitle(
"📺 Lampy ❤️ Rose Creator Hub"
)

.addFields(

{
name:"🔥 Lampy",

value:
`👥 Subs: ${lampy.subscriberCount}
👀 Views: ${lampy.viewCount}
🎬 Videos: ${lampy.videoCount}`,

inline:true
},

{
name:"🌸 Rose",

value:
`👥 Subs: ${rose.subscriberCount}
👀 Views: ${rose.viewCount}
🎬 Videos: ${rose.videoCount}`,

inline:true
}

)

.setFooter({
text:"live creator stats 😭💞"
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

}
