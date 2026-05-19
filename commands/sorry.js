const {
EmbedBuilder
}=require("discord.js");

module.exports={

name:"sorry",

async execute(message){

const embed=

new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"💌 Loading apology..."
)

.setDescription(
"💭 ..."
)

.setFooter({
text:"Twohearts 😭"
});


const msg=

await message.reply({

embeds:[
embed
]

});


const scenes=[

"💭 *Lampy thinking...*",

"🥺 aage se nahi kru ga... ye pakka",

"🤍 sachi me...",

"😭 agar me fir kru...",

"😔 toh mujhe insult karke chhod dena chahiye aap...",

"🫶 apki kasam...",

"— Lampy",

"💞 i love you",

"😭 sorry for hurting you"

];



for(

let i=0;

i<scenes.length;

i++

){

await new Promise(

r=>

setTimeout(
r,
1800
)

);


embed

.setTitle(
"💌 Sorry Letter"
)

.setDescription(

scenes

.slice(
0,
i+1
)

.join(

"\n\n"

)

);


await msg.edit({

embeds:[
embed
]

});

}


embed.setFooter({

text:
"Lampy ❤️ Rose"

});


await msg.edit({

embeds:[
embed
]

});

}

};
