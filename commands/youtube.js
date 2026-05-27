const {
EmbedBuilder
}=require("discord.js");

const yt=require("yt-channel-info");

module.exports={

name:"youtube",
aliases:["yt"],

async execute(message){

try{

const lampySearch=
await yt.searchChannel("imlampy-r5x");

const roseSearch=
await yt.searchChannel("itzrosefx");


const lampy=
await yt.getChannelInfo(
lampySearch.authorId
);

const rose=
await yt.getChannelInfo(
roseSearch.authorId
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
