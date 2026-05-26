const{
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
"💞 Twohearts — Lampy & Rose World"
)

.setDescription(

`Welcome home 😭

Your third-wheel roommate.

🫂 Love
🎮 Games
💌 Fun
🌙 Cozy
🎪 Chaos
🌎 World
⚔️ Dungeon
🤍 AI

Lampy ❤️ Rose forever`

)

.setThumbnail(
message.guild?.iconURL()
)

.setFooter({
text:"Page 1/9 💞"
})

);


// LOVE

pages.push(

new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"🫂 Love"
)

.setDescription(

'`RL!hug`\n'+
'`RL!kiss`\n'+
'`RL!holdhand`\n'+
'`RL!ship`\n'+
'`RL!soulmate`\n'+
'`RL!marry`\n'+
'`RL!divorce`\n'+
'`RL!partner`\n'+
'`RL!crazyinlove`\n'+
'`RL!care`\n'+
'`RL!hidekiss`\n'+
'`RL!confess`\n'+
'`RL!temptation`\n'+
'`RL!checkin`\n'+
'`RL!3am`\n'+
'`RL!afterhours`\n'+
'`RL!reverse`\n'+
'`RL!universe`\n'+
'`RL!dailylove`\n'+
'`RL!heartbeat`\n'+
'`RL!heartbeatrace`\n'+
'`RL!loveemoji`\n'+
'`RL!le`\n'+
'`RL!spamlove`\n'+
'`RL!lovexp`\n'+
'`RL!lovetest`'

)

.setFooter({
text:"Page 2/9 💞"
})

);


// GAMES

pages.push(

new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"🎮 Games"
)

.setDescription(

'`RL!guess`\n'+
'`RL!guessnumber`\n'+
'`RL!wouldyou`\n'+
'`RL!truth`\n'+
'`RL!dare`\n'+
'`RL!battle`\n'+
'`RL!typerace`\n'+
'`RL!mathquiz`\n'+
'`RL!chemistry`\n'+
'`RL!unscramble`\n'+
'`RL!emojiguess`\n'+
'`RL!catchheart`\n'+
'`RL!catchheart stats`'

)

.setFooter({
text:"Page 3/9 🎮"
})

);


// FUN

pages.push(

new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"💌 Fun"
)

.setDescription(

'`RL!rep`\n'+
'`RL!roast`\n'+
'`RL!dream`\n'+
'`RL!loveradio`\n'+
'`RL!night`\n'+
'`RL!date`\n'+
'`RL!fortune`\n'+
'`RL!feed`\n'+
'`RL!scenario`\n'+
'`RL!lovescene`\n'+
'`RL!mood`\n'+
'`RL!wish`\n'+
'`RL!future`\n'+
'`RL!fate`\n'+
'`RL!mystery`\n'+
'`RL!distance`\n'+
'`RL!mochi`'

)

.setFooter({
text:"Page 4/9 💌"
})

);


// CHAOS

pages.push(

new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"🎪 Chaos"
)

.setDescription(

'`RL!sleepcall`\n'+
'`RL!pet`\n'+
'`RL!adopt`\n'+
'`RL!dailygift`\n'+
'`RL!latecall`\n'+
'`RL!dateidea`\n'+
'`RL!obsessed`\n'+
'`RL!blush`\n'+
'`RL!compatibility`\n'+
'`RL!stealheart`\n'+
'`RL!firstmove`\n'+
'`RL!stare`\n'+
'`RL!cringe`'

)

.setFooter({
text:"Page 5/9 🎪"
})

);


// WORLD

pages.push(

new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"🌎 World"
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
text:"Page 6/9 🌎"
})

);


// DUNGEON

pages.push(

new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"⚔️ Love Dungeon"
)

.setDescription(

'`RL!dungeon`\n'+
'`RL!attack`\n'+
'`RL!hug`\n'+
'`RL!protect`\n'+
'`RL!heal`\n'+
'`RL!stats`'

)

.setFooter({
text:"Page 7/9 ⚔️"
})

);


// EMOJIS

pages.push(

new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"🌸 Emoji Pack"
)

.setDescription(

'Private Lampy + Rose emojis 😭💞\n\n'+
'`RL!loveemoji`\n'+
'`RL!le`\n'+
'`RL!spamlove`'

)

.setFooter({
text:"Page 8/9 🌸"
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

`Talk in:

#twohearts-ai

Warm
Playful
Remembers things 😭💞`

)

.setFooter({
text:"Page 9/9 🤍"
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

embeds:[pages[current]],
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
content:"😭 not your menu",
ephemeral:true
});

}


if(i.customId==="right")
current=(current+1)%pages.length;

if(i.customId==="left")
current=(current-1+pages.length)%pages.length;

if(i.customId==="home")
current=0;


await i.update({

embeds:[pages[current]],
components:[row]

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
