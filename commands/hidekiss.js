const {
EmbedBuilder,
ActionRowBuilder,
ButtonBuilder,
ButtonStyle
}=require("discord.js");

module.exports={

name:"hidekiss",

async execute(message){

const places=[

"pillow",
"moon",
"controller",
"cookie"

];

const names={

pillow:"🧸 Pillow",
moon:"🌙 Moon",
controller:"🎮 Controller",
cookie:"🍪 Cookie Jar"

};


const hidden=

places[
Math.floor(
Math.random()*places.length
)
];


let tries=2;


const embed=

new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"💋 Hide Kiss"
)

.setDescription(

`A kiss was hidden somewhere 😭

You have:

${tries} tries

Find it before Mochi does.`

);


const row=

new ActionRowBuilder()

.addComponents(

new ButtonBuilder()
.setCustomId("pillow")
.setLabel("🧸 Pillow")
.setStyle(ButtonStyle.Secondary),

new ButtonBuilder()
.setCustomId("moon")
.setLabel("🌙 Moon")
.setStyle(ButtonStyle.Primary),

new ButtonBuilder()
.setCustomId("controller")
.setLabel("🎮 Controller")
.setStyle(ButtonStyle.Success),

new ButtonBuilder()
.setCustomId("cookie")
.setLabel("🍪 Cookie Jar")
.setStyle(ButtonStyle.Danger)

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

time:30000

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
i.customId===hidden
){

embed

.setDescription(

`💋 FOUND IT 😭💞

Location:

${names[hidden]}

+30 Love Points

Mochi is crying 🐱`

);


collector.stop();


return i.update({

embeds:[
embed
],

components:[]

});

}


tries--;


let fail=


`😭 Wrong

${names[i.customId]}

was empty.`;


if(
Math.random()>.65
){

fail+=

`\n\n💀 Mochi stole a cookie`;

}


if(
tries<=0
){

embed

.setDescription(

`${fail}

\n\n💔 OUT OF TRIES

Mochi found the kiss first 😭`

);


collector.stop();


return i.update({

embeds:[
embed
],

components:[]

});

}


embed.setDescription(

`${fail}

\n${tries}
tries left 😭`

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
