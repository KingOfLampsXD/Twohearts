const {
EmbedBuilder,
ActionRowBuilder,
ButtonBuilder,
ButtonStyle
}=require("discord.js");

module.exports={

name:"help",

async execute(message){

const pages=[];


// HOME

pages.push(

new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"💞 Twohearts — Lampy & Rose World ✨"
)

.setDescription(

`Welcome home 😭

Twohearts isn't just a bot.

She's basically your tiny third-wheel roommate living inside the server.

🫂 Love
🎮 Games
🌙 Sleep calls
💌 Memories
🌎 Worlds
🎪 Chaos

Lampy ❤️ Rose forever`

)

.setThumbnail(
message.guild?.iconURL()
)

.setFooter({
text:"Page 1/8 💞"
})

);


// LOVE

pages.push(

new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"🫂 Love Commands"
)

.setDescription(

'`RL!hug`\n'+
'`RL!kiss`\n'+
'`RL!ship`\n'+
'`RL!soulmate`\n'+
'`RL!dailylove`\n\n'+

'💞 LOVE PACK\n'+
'`RL!love mood`\n'+
'`RL!love pickup`\n'+
'`RL!love rate`\n'+
'`RL!love wish`\n'+
'`RL!love promise`\n'+
'`RL!love nick`\n'+
'`RL!love challenge`\n'+
'`RL!love emoji`\n'+
'`RL!love song`\n'+
'`RL!love countdown`'

)

.setFooter({
text:"Page 2/8 😭"
})

);


// GAMES

pages.push(

new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"🎮 Couple Games"
)

.setDescription(

'`RL!wouldyou`\n'+
'`RL!truth`\n'+
'`RL!dare`\n'+
'`RL!guess`\n'+
'`RL!battle`\n'+
'`RL!catchheart`\n'+
'`RL!catchheart stats`'

)

.setFooter({
text:"Page 3/8 😭"
})

);


// FUN

pages.push(

new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"💌 Fun Stuff"
)

.setDescription(

'`RL!fun letter`\n'+
'`RL!fun openletter`\n'+
'`RL!fun memory`\n'+
'`RL!fun memories`\n'+
'`RL!fun streak`\n'+
'`RL!fun mission`\n'+
'`RL!fun sleep`\n'+
'`RL!fun vote`\n'+
'`RL!fun stare`\n'+
'`RL!fun choose`\n'+
'`RL!fun memorytest`\n'+
'`RL!fun thisorthat`\n'+
'`RL!fun challenge2`\n'+
'`RL!fun compatibility`\n'+
'`RL!fun firstmove`\n'+
'`RL!fun stealheart`\n'+
'`RL!fun mission2`\n'+
'`RL!fun fate`'

)

.setFooter({
text:"Page 4/8 💌"
})

);


// COZY

pages.push(

new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"🌙 Cozy Stuff"
)

.setDescription(

'`RL!night`\n'+
'`RL!date`\n'+
'`RL!scenario`\n'+
'`RL!fortune`\n'+
'`RL!lovescene`'

)

.setFooter({
text:"Page 5/8 🌙"
})

);


// CHAOS

pages.push(

new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"🎪 Chaos Pack"
)

.setDescription(

'`RL!heartbeat`\n'+
'`RL!sync`\n'+
'`RL!mood`\n'+
'`RL!dream`\n'+
'`RL!chaos`\n'+
'`RL!cuddle`\n'+
'`RL!kissmeter`\n'+
'`RL!sleepcall`\n'+
'`RL!vibes`\n'+
'`RL!pet`\n'+
'`RL!adopt`\n'+
'`RL!dailygift`\n'+
'`RL!lovebank`\n'+
'`RL!fortune2`\n'+
'`RL!latecall`\n'+
'`RL!dateidea`\n'+
'`RL!cringe`\n'+
'`RL!memory`\n'+
'`RL!distance`\n'+
'`RL!compatibility`\n'+
'`RL!future`\n'+
'`RL!firstmove`\n'+
'`RL!stealheart`\n'+
'`RL!stare`\n'+
'`RL!wish`\n'+
'`RL!obsessed`\n'+
'`RL!blush`\n'+
'`RL!mystery`\n'+
'`RL!fate`\n'+
'`RL!mochi`'

)

.setFooter({
text:"Page 6/8 😭"
})

);


// WORLD

pages.push(

new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"🌎 World System"
)

.setDescription(

'`RL!world start`\n'+
'`RL!world next`\n'+
'`RL!world choose`\n'+
'`RL!world stats`\n'+
'`RL!world inventory`\n'+
'`RL!world home`\n'+
'`RL!world map`\n'+
'`RL!world scene`\n'+
'`RL!world reset`'

)

.setFooter({
text:"Page 7/8 🌎"
})

);


// AI

pages.push(

new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"🤍 Twohearts AI"
)

.setDescription(

`Chat naturally in:

#twohearts-ai

She's not a command machine 😭

She remembers things
She vibes
She causes chaos
She third-wheels

Lampy ❤️ Rose + Twohearts`

)

.setFooter({
text:"Page 8/8 💞"
})

);



let current=0;


const row=
new ActionRowBuilder()

.addComponents(

new ButtonBuilder()
.setCustomId("left")
.setEmoji("⬅️")
.setStyle(ButtonStyle.Secondary),

new ButtonBuilder()
.setCustomId("home")
.setEmoji("💞")
.setStyle(ButtonStyle.Danger),

new ButtonBuilder()
.setCustomId("right")
.setEmoji("➡️")
.setStyle(ButtonStyle.Secondary)

);


const msg=
await message.reply({

embeds:[
pages[current]
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

content:"😭 not your menu",

ephemeral:true

});

}


if(i.customId==="right"){

current++;

if(current>=pages.length)
current=0;

}


if(i.customId==="left"){

current--;

if(current<0)
current=
pages.length-1;

}


if(i.customId==="home"){

current=0;

}


await i.update({

embeds:[
pages[current]
],

components:[
row
]

});

});


collector.on(

"end",

()=>{

msg.edit({

components:[]

}).catch(()=>{});

});

}

};
