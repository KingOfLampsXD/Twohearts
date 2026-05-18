```js
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

pages.push(
new EmbedBuilder()
.setColor('#ff7eb6')
.setTitle('💞 Twohearts — Lampy & Rose World ✨')
.setDescription(`Welcome home 😭

Twohearts is your tiny third-wheel roommate.

🫂 Love
🎮 Games
🌙 Cozy
💌 Fun
🎪 Chaos
🌎 World
🤍 AI`) 
.setThumbnail(message.guild?.iconURL())
.setFooter({text:'Page 1/8 💞'})
);

pages.push(
new EmbedBuilder()
.setColor('#ff7eb6')
.setTitle('🫂 Love')
.setDescription(
'`RL!hug`\n`RL!kiss`\n`RL!ship`\n`RL!soulmate`\n`RL!dailylove`\n`RL!holdhand`\n`RL!marry`\n\n💞 Love Levels\n`RL!lovelevel`\n`RL!lovexp`\n`RL!lovetest`'
)
.setFooter({text:'Page 2/8'})
);

pages.push(
new EmbedBuilder()
.setColor('#ff7eb6')
.setTitle('🎮 Games')
.setDescription(
'`RL!wouldyou`\n`RL!truth`\n`RL!dare`\n`RL!guess`\n`RL!battle`\n`RL!catchheart`\n`RL!catchheart stats`\n`RL!typerace`'
)
.setFooter({text:'Page 3/8'})
);

pages.push(
new EmbedBuilder()
.setColor('#ff7eb6')
.setTitle('💌 Fun')
.setDescription(
'`RL!fun letter`\n`RL!fun openletter`\n`RL!fun memory`\n`RL!fun memories`\n`RL!fun streak`\n`RL!fun mission`\n`RL!fun sleep`\n`RL!fun vote`\n`RL!fun choose`\n`RL!fun memorytest`\n`RL!fun thisorthat`'
)
.setFooter({text:'Page 4/8'})
);

pages.push(
new EmbedBuilder()
.setColor('#ff7eb6')
.setTitle('🌙 Cozy')
.setDescription(
'`RL!night`\n`RL!date`\n`RL!scenario`\n`RL!fortune`\n`RL!lovescene`\n`RL!feed`'
)
.setFooter({text:'Page 5/8'})
);

pages.push(
new EmbedBuilder()
.setColor('#ff7eb6')
.setTitle('🎪 Chaos Pack')
.setDescription(
'`RL!heartbeat` `RL!sync` `RL!mood`\n`RL!dream` `RL!chaos`\n`RL!cuddle` `RL!kissmeter`\n`RL!sleepcall` `RL!vibes`\n`RL!pet` `RL!adopt`\n`RL!lovebank` `RL!future`\n`RL!stare` `RL!wish`\n`RL!obsessed` `RL!mochi`\n`RL!mystery` `RL!fate`'
)
.setFooter({text:'Page 6/8'})
);

pages.push(
new EmbedBuilder()
.setColor('#ff7eb6')
.setTitle('🌎 World')
.setDescription(
'`RL!world start`\n`RL!world next`\n`RL!world choose`\n`RL!world stats`\n`RL!world inventory`\n`RL!world home`\n`RL!world map`\n`RL!world scene`\n`RL!world reset`'
)
.setFooter({text:'Page 7/8'})
);

pages.push(
new EmbedBuilder()
.setColor('#ff7eb6')
.setTitle('🤍 AI')
.setDescription('Chat in `#twohearts-ai` 😭💞')
.setFooter({text:'Page 8/8'})
);

let current=0;

const row=new ActionRowBuilder().addComponents(
new ButtonBuilder().setCustomId('left').setEmoji('⬅️').setStyle(ButtonStyle.Secondary),
new ButtonBuilder().setCustomId('home').setEmoji('💞').setStyle(ButtonStyle.Danger),
new ButtonBuilder().setCustomId('right').setEmoji('➡️').setStyle(ButtonStyle.Secondary)
);

const msg=await message.reply({embeds:[pages[0]],components:[row]});

const collector=msg.createMessageComponentCollector({time:60000});

collector.on('collect',async i=>{
if(i.user.id!==message.author.id){
return i.reply({content:'😭 not your menu',ephemeral:true});
}

if(i.customId==='right') current=(current+1)%pages.length;
if(i.customId==='left') current=(current-1+pages.length)%pages.length;
if(i.customId==='home') current=0;

await i.update({embeds:[pages[current]],components:[row]});
});

collector.on('end',()=>{
msg.edit({components:[]}).catch(
```
