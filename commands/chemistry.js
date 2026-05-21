const {
EmbedBuilder,
ActionRowBuilder,
ButtonBuilder,
ButtonStyle
}=require("discord.js");

module.exports={

name:"chemistry",

async execute(message){

let chemistry=
Math.floor(
Math.random()*40
)+60;


const embed=

new EmbedBuilder()

.setColor("#ff4fa3")

.setTitle(
"💞 Chemistry Test"
)

.setDescription(

`Tension level:

${chemistry}% 😭

Choose wisely...`

);


const row=

new ActionRowBuilder()

.addComponents(

new ButtonBuilder()

.setCustomId("closer")

.setLabel(
"🔥 Pull Closer"
)

.setStyle(
ButtonStyle.Danger
),

new ButtonBuilder()

.setCustomId("eye")

.setLabel(
"👀 Eye Contact"
)

.setStyle(
ButtonStyle.Secondary
),

new ButtonBuilder()

.setCustomId("hand")

.setLabel(
"🫶 Hold Hand"
)

.setStyle(
ButtonStyle.Success
),

new ButtonBuilder()

.setCustomId("panic")

.setLabel(
"😳 Panic"
)

.setStyle(
ButtonStyle.Primary
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

time:20000

});


collector.on(

"collect",

async(i)=>{

if(
i.user.id!==message.author.id
){

return i.reply({

content:
"😭 not yours",

ephemeral:true

});

}


let text="";


if(
i.customId==="closer"
){

chemistry+=15;

text=
"🔥 BRO THE TENSION JUST WENT UP 😭";

}


if(
i.customId==="eye"
){

chemistry+=8;

text=
"👀 stared too long... dangerous";

}


if(
i.customId==="hand"
){

chemistry+=12;

text=
"🫶 hand holding detected";

}


if(
i.customId==="panic"
){

chemistry-=10;

text=
"😳 panic mode activated";

}


embed.setDescription(

`${text}

💞 Chemistry:

${chemistry}%`

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
