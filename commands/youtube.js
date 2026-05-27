const {
EmbedBuilder
}=require("discord.js");

const yt =
require("yt-channel-info");

module.exports={

name:"youtube",
aliases:["yt","creator","creators"],

async execute(message){

try{

const lampy =
await yt.getChannelInfo(
"UClhRYCA9yXtgWo4aoWu2Qvw"
);

const rose =
await yt.getChannelInfo(
"UC7i9QRdkUfOxA6dfO99GCFA"
);


const randomLines=[

"💞 Relationship + content grind",
"😭 Upload schedule: chaos",
"🌙 Twohearts creator energy",
"✨ Rose + Lampy takeover"

];


const line=
randomLines[
Math.floor(
Math.random()*randomLines.length
)
];


const embed=
new EmbedBuilder()

.setColor("#ff4f9d")

.setTitle(
"📺 Lampy ❤️ Rose Creator Hub"
)

.setDescription(
line
)

.addFields(

{
name:"🔥 I'm Lampy",

value:

`👥 Subs: ${
lampy.subscriberCount ||
"Hidden"
}

👀 Views: ${
Number(
lampy.viewCount
).toLocaleString()
||

"Unknown"
}

🎬 Videos: ${
lampy.videoCount ||
"Unknown"
}`,

inline:true
},

{
name:"🌸 RoseFX",

value:

`👥 Subs: ${
rose.subscriberCount ||
"Hidden"
}

👀 Views: ${
Number(
rose.viewCount
).toLocaleString()
||

"Unknown"
}

🎬 Videos: ${
rose.videoCount ||
"Unknown"
}`,

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

`😭 YouTube attacked us:

${err.message}`

);

}

}

};
