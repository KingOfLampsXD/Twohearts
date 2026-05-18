const {
EmbedBuilder,
ActionRowBuilder,
ButtonBuilder,
ButtonStyle
}=require('discord.js');

module.exports={

name:'help',

async execute(message){

const pages=[];


// HOME

pages.push(

new EmbedBuilder()

.setColor('#ff7eb6')

.setTitle(
'💞 Twohearts — Lampy & Rose World ✨'
)

.setDescription(

`Welcome home 😭

Twohearts is your tiny third-wheel bestie living in the server.

🫂 Love
🎮 Chaos
🌙 Late nights
💌 Memories

Lampy ❤️ Rose forever`

)

.addFields(

{
name:'🫂 Love',
value:
'`RL!hug`\n`RL!kiss`\n`RL!ship`\n`RL!soulmate`\n`RL!dailylove`',
inline:true
},

{
name:'🎮 Games',
value:
'`RL!wouldyou`\n`RL!truth`\n`RL!dare`\n`RL!guess`\n`RL!battle`\n`RL!catchheart`',
inline:true
}

)

.setThumbnail(
message.guild.iconURL()
)

.setFooter({
text:'Page 1/4 😭💞'
})

);


// PAGE 2

pages.push(

new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"💌 Fun Stuff"
)

.setDescription(

'`RL!fun letter`\n`RL!fun memories`\n`RL!fun streak`\n`RL!fun mission`\n`RL!fun vote`\n`RL!fun thisorthat`\n`RL!fun compatibility`\n`RL!fun fate`'

)

.setFooter({
text:'Page 2/4 😭'
})

);



// PAGE 3

pages.push(

new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"🎪 Chaos Pack"
)

.setDescription(

'`RL!heartbeat`\n`RL!sync`\n`RL!mood`\n`RL!dream`\n`RL!chaos`\n`RL!cuddle`\n`RL!kissmeter`\n`RL!sleepcall`\n`RL!vibes`\n`RL!pet`\n`RL!future`\n`RL!stare`\n`RL!wish`\n`RL!obsessed`\n`RL!mochi`'

)

.setFooter({
text:'Page 3/4 😭'
})

);


// PAGE 4

pages.push(

new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"🌎 World + AI"
)

.setDescription(

'`RL!world start`\n`RL!world next`\n`RL!world stats`\n`RL!world inventory`\n`RL!world reset`\n\n🤍 Chat in `#twohearts-ai`'

)

.setFooter({
text:'Page 4/4 😭💞'
})

);



let current=0;


const row=
new ActionRowBuilder()

.addComponents(

new ButtonBuilder()

.setCustomId(
"left"
)

.setEmoji(
"⬅️"
)

.setStyle(
ButtonStyle.Secondary
),

new ButtonBuilder()

.setCustomId(
"home"
)

.setEmoji(
"💞"
)

.setStyle(
ButtonStyle.Danger
),

new ButtonBuilder()

.setCustomId(
"right"
)

.setEmoji(
"➡️"
)

.setStyle(
ButtonStyle.Secondary
)

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
i.user.id
!==message.author.id
){

return i.reply({

content:
"😭 not your menu",

ephemeral:true

});

}


if(
i.customId==="right"
){

current++;

if(
current>=pages.length
)
current=0;

}


if(
i.customId==="left"
){

current--;

if(
current<0
)
current=
pages.length-1;

}


if(
i.customId==="home"
){

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
