const{
EmbedBuilder,
ActionRowBuilder,
ButtonBuilder,
ButtonStyle
}=require("discord.js");

module.exports={

name:"temptation",

async execute(message){

let round=1;
let tension=50;

const events=[

"👀 eye contact lasted too long",

"😳 somebody got shy",

"🫶 hand holding detected",

"😭 stay 5 more mins activated",

"💀 Mochi interrupted everything",

"🌙 late night energy increasing"

];


const embed=

new EmbedBuilder()

.setColor("#ff4fa3")

.setTitle(
"💞 Temptation"
)

.setDescription(

`Round: ${round}/5

Tension:
${tension}% 😭

Choose wisely...`

);


const row=

new ActionRowBuilder()

.addComponents(

new ButtonBuilder()

.setCustomId(
"closer"
)

.setLabel(
"🔥 Pull Closer"
)

.setStyle(
ButtonStyle.Danger
),

new ButtonBuilder()

.setCustomId(
"stare"
)

.setLabel(
"👀 Keep Staring"
)

.setStyle(
ButtonStyle.Secondary
),

new ButtonBuilder()

.setCustomId(
"away"
)

.setLabel(
"😳 Look Away"
)

.setStyle(
ButtonStyle.Primary
),

new ButtonBuilder()

.setCustomId(
"hand"
)

.setLabel(
"🫶 Hold Hands"
)

.setStyle(
ButtonStyle.Success
)

);


const msg=

await message.reply({

embeds:[
embed
],

components:[
row
]

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


if(
i.customId==="closer"
)
tension+=15;


if(
i.customId==="stare"
)
tension+=10;


if(
i.customId==="away"
)
tension-=8;


if(
i.customId==="hand"
)
tension+=12;


if(
tension>100
)
tension=100;


if(
tension<0
)
tension=0;


const random=

events[

Math.floor(
Math.random()*
events.length
)

];


round++;


if(
round>5
){

collector.stop();


let result=


"🙂 normal";


if(
tension>=70
)
result=
"💞 BRO y'all cannot act normal 😭";


if(
tension>=90
)
result=
"🔥 danger level relationship energy";


embed

.setTitle(
"💞 FINAL RESULT"
)

.setDescription(

`${random}

Tension:
${tension}%

${result}

+50 Love Points 😭`

);


return i.update({

embeds:[
embed
],

components:[]

});

}


embed

.setDescription(

`${random}

Round:
${round}/5

Tension:
${tension}%`

);


await i.update({

embeds:[
embed
],

components:[
row
]

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
