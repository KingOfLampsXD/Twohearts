const {EmbedBuilder}=require("discord.js");

module.exports={

name:"sorry",

async execute(message){

const embed=new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle("💌 Message loading...")

.setDescription("...")

.setFooter({
text:"Twohearts 😭"
});

const msg=
await message.reply({
embeds:[embed]
});


const scenes=[

" *Lampy thinking...*",

" nahi krne wala aage se...",

"🤍 apki kasam...",

"— Lampy",

"💞 i love you...",

" sorry for hurting you"

];


for(let i=0;i<scenes.length;i++){

await new Promise(
r=>setTimeout(r,2000)
);

embed.setDescription(

scenes
.slice(0,i+1)
.join("\n\n")

);

embed.setTitle(
"💌 Sorry Letter"
);

await msg.edit({
embeds:[embed]
});

}


embed.setFooter({
text:"Lampy ❤️ Rose"
});

await msg.edit({
embeds:[embed]
});

}

};
