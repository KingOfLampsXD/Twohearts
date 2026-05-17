const { EmbedBuilder } = require('discord.js');

module.exports={

name:'help',

async execute(message){

const embed=
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
✨ Tiny world for Lampy + Rose

Lampy ❤️ Rose forever`

)

.addFields(

{
name:'🫂 Love',
value:
'`RL!hug`\n`RL!kiss`\n`RL!ship`\n`RL!soulmate`',
inline:true
},

{
name:'🎮 Couple Games',
value:
'`RL!wouldyou`\n`RL!truth`\n`RL!dare`\n`RL!guess`\n`RL!battle`\n`RL!catchheart`\n`RL!catchheart stats`',
inline:true
},

{
name:'🌙 Cozy',
value:
'`RL!night`\n`RL!date`\n`RL!scenario`\n`RL!fortune`',
inline:true
},

{
name:'💌 Fun Systems',
value:
'`RL!fun letter <msg>`\n`RL!fun openletter`\n`RL!fun memory <memory>`\n`RL!fun memories`\n`RL!fun streak`\n`RL!fun mission`\n`RL!fun sleep`\n`RL!fun vote a | b`\n`RL!fun stare`\n`RL!fun choose`\n`RL!fun memorytest`\n`RL!fun thisorthat`\n`RL!fun challenge2`\n`RL!fun compatibility`\n`RL!fun firstmove`\n`RL!fun stealheart`\n`RL!fun mission2`\n`RL!fun fate`',
inline:false
},

{
name:'🌎 World',
value:
'`RL!world start`\n`RL!world next`\n`RL!world choose 1`\n`RL!world choose 2`\n`RL!world choose 3`\n`RL!world stats`\n`RL!world inventory`\n`RL!world home`\n`RL!world map`\n`RL!world scene`\n`RL!world reset`',
inline:false
},

{
name:'💖 Love Pack',
value:
'`RL!love mood`\n`RL!love pickup`\n`RL!love rate`\n`RL!love wish`\n`RL!love promise`\n`RL!love nick`\n`RL!love challenge`\n`RL!love emoji`\n`RL!love song`\n`RL!love countdown`\n`RL!lovescene`',
inline:false
},

{
name:'🤍 AI Friend',
value:
'Chat in `#twohearts-ai`\nTwohearts hangs around naturally 😭',
inline:false
}

)

.setThumbnail(
message.guild.iconURL()
)

.setFooter({

text:
'Distance tried • Love said nope 😭💞'

})

.setTimestamp();

return message.reply({

embeds:[embed]

});

}

};
