const {EmbedBuilder}=require("discord.js");

module.exports={

name:"crazyinlove",

async execute(message){

const embed=
new EmbedBuilder()

.setColor("#ff4fa3")

.setTitle(
"💞 Loading..."
)

.setDescription("...");


const msg=
await message.reply({

embeds:[embed]

});


const lines=[

"💭 sometimes i miss you for no reason...",

"📱 then i check my phone...",

"😭 and realize i was waiting for your notification",

"🫶 5 minutes becomes 'stay a little more'",

"🌙 sleep becomes 'one more call'",

"💞 distance becomes 'one more day'",

"🏠 future becomes 'one day us'",

"❤️ and somehow...",

"😭 i accidentally loved you too much",

"— Lampy 💞"

];


for(let i=0;i<lines.length;i++){

await new Promise(
r=>setTimeout(r,1800)
);

embed
.setTitle("💞 Max Love Mode")

.setDescription(

lines
.slice(0,i+1)
.join("\n\n")

);

await msg.edit({

embeds:[embed]

});

}

}

};
