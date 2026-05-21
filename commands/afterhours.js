const{
EmbedBuilder,
ActionRowBuilder,
ButtonBuilder,
ButtonStyle
}=require("discord.js");

module.exports={

name:"afterhours",

async execute(message){

let chemistry=50;
let round=1;

const moments=[

"👀 eye contact lasted way too long...",

"😳 somebody got shy and looked away",

"🫶 personal space mysteriously disappeared",

"💞 heartbeat acting suspicious",

"🌙 '5 more mins?' energy activated",

"😭 act normal challenge FAILED",

"📱 instantly checking notifications detected",

"🤍 silence somehow became comfortable",

"🫣 somebody definitely smiled at the screen"

];


const embed=

new EmbedBuilder()

.setColor("#ff4fa3")

.setTitle(
"🌙 After Hours"
)

.setDescription(

`Round ${round}/5

Chemistry:
${chemistry}% 😭

Late-night mode activated...`

);


const row=

new ActionRowBuilder()

.addComponents(

new ButtonBuilder()

.setCustomId("closer")

.setLabel(
"🫶 Stay Close"
)

.setStyle(
ButtonStyle.Success
),

new ButtonBuilder()

.setCustomId("look")

.setLabel(
"👀 Keep Looking"
)

.setStyle(
ButtonStyle.Secondary
),

new ButtonBuilder()

.setCustomId("fluster")

.setLabel(
"😳 Get Flustered"
)

.setStyle(
ButtonStyle.Primary
),

new ButtonBuilder()

.setCustomId("sweet")

.setLabel(
"🤍 Say Something Sweet"
)

.setStyle(
ButtonStyle.Danger
)

);


const msg=
await message.reply({

embeds:[embed],
components:[row]

});


const collector=

msg.createMessageComponentCollector({

time:60000

});


collector.on(

"collect",

async(i)=>{

if(
i.user.id!==message.author.id
){

return i.reply({

content:
"😭 not your game",

ephemeral:true

});

}


if(i.customId==="closer")
chemistry+=15;

if(i.customId==="look")
chemistry+=10;

if(i.customId==="fluster")
chemistry+=5;

if(i.customId==="sweet")
chemistry+=12;


if(chemistry>100)
chemistry=100;


const event=

moments[
Math.floor(
Math.random()*moments.length
)
];


round++;


if(round>5){

collector.stop();

let ending=
"💞 cute chaos energy";

if(
chemistry>=80
)
ending=
"🫶 dangerously attached detected 😭";

if(
chemistry>=95
)
ending=
"🌙 BRO nobody wanted the moment to end 😭💞";


embed.setTitle(
"💞 Final Result"
)

.setDescription(

`${event}

Chemistry:
${chemistry}%

${ending}

-Lampy 💞`

);


return i.update({

embeds:[embed],

components:[]

});

}


embed.setDescription(

`${event}

Round:
${round}/5

Chemistry:
${chemistry}%`

);


await i.update({

embeds:[embed],

components:[row]

});

}

);


collector.on(

"end",

()=>{

msg.edit({

components:[]

}).catch(()=>{});

}

);

}

};
