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
"I'm Lampy"
);

const rose=
await YouTube.searchOne(
"RoseFX"
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
${lampy?.subscriberCount || "213+"}

🎬 Videos:
${lampy?.videos?.length || "11"}

🔗
${lampy.url}`,

inline:true
},

{
name:"🌸 RoseFX",

value:

`👥 Subs:
${rose?.subscriberCount || "Unknown"}

🎬 Videos:
${rose?.videos?.length || "Unknown"}

🔗
${rose.url}`,

inline:true
}

)

.setFooter({

text:
"Lampy ❤️ Rose"

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
