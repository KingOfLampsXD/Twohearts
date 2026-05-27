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
"UCxxxxxxxx"
);

const rose=
await yt.getChannelInfo(
"UCyyyyyyyy"
);


const embed=
new EmbedBuilder()

.setColor("#ff0000")

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
text:"live stats 😭💞"
});


message.reply({
embeds:[embed]
});

}catch(err){

console.log(err);

message.reply(
"😭 YouTube exploded"
);

}

}

}
