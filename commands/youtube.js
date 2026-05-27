const { EmbedBuilder } = require("discord.js");
const yt = require("yt-channel-info");

module.exports = {

name:"youtube",
aliases:["yt","creator"],

async execute(message){

try{

let lampyData;
let roseData;

try{

lampyData = await yt.getChannelInfo("UCxxxxxxxxxxxxxxxx");

}catch{

lampyData={

subscriberCount:"213",
videoCount:"11",
viewCount:"11,577"

};

}

try{

roseData = await yt.getChannelInfo("UCyyyyyyyyyyyyyyyy");

}catch{

roseData={

subscriberCount:"Unknown",
videoCount:"Unknown",
viewCount:"Unknown"

};

}

const embed = new EmbedBuilder()

.setColor("#ff4f9d")

.setTitle(
"🔵 Lampy❤️Rose Creator Hub"
)

.setDescription(
"💞 Live YouTube stats"
)

.addFields(

{
name:"🔥 I'm Lampy",
value:
`👥 Subs: ${lampyData.subscriberCount}
👀 Views: ${lampyData.viewCount}
🎬 Videos: ${lampyData.videoCount}`,
inline:true
},

{
name:"🌸 RoseFX",
value:
`👥 Subs: ${roseData.subscriberCount}
👀 Views: ${roseData.viewCount}
🎬 Videos: ${roseData.videoCount}`,
inline:true
}

)

.setFooter({
text:"RL!youtube • Lampy ❤️ Rose"
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
