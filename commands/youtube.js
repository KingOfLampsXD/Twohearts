const {
EmbedBuilder
}=require("discord.js");

const yt =
require("yt-channel-info");

module.exports={

name:"youtube",
aliases:["yt","creators"],

async execute(message){

try{

const channels=[

{
name:"🔥 I'm Lampy",
id:"@imlampy-r5x"
},

{
name:"🌸 RoseFX",
id:"@itzrosefx"
}

];


const results=[];


for(const ch of channels){

try{

const data=
await yt.getChannelInfo(ch.id);

results.push({

name:ch.name,

subs:
data?.subscriberCount ||
"Unknown",

views:
data?.viewCount ||
"Unknown",

videos:
data?.videoCount ||
"Unknown"

});

}catch{

results.push({

name:ch.name,

subs:"Error",

views:"Error",

videos:"Error"

});

}

}


const embed=
new EmbedBuilder()

.setColor("#ff4f9d")

.setTitle(
"📺 Lampy ❤️ Rose Creator Hub"
)

.setDescription(
"💞 Live YouTube stats"
)

.addFields(

{
name:results[0].name,

value:
`👥 Subs: ${results[0].subs}
👀 Views: ${results[0].views}
🎬 Videos: ${results[0].videos}`,

inline:true
},

{
name:results[1].name,

value:
`👥 Subs: ${results[1].subs}
👀 Views: ${results[1].views}
🎬 Videos: ${results[1].videos}`,

inline:true
}

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

`😭 Creator Hub crashed

${err.message}`

);

}

}

};
