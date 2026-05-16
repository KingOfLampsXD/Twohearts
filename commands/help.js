const { EmbedBuilder } = require('discord.js');

module.exports={

name:'help',

async execute(message){

const embed=
new EmbedBuilder()

.setColor('#ff6fae')

.setTitle(
'💞 Twohearts — Lampy & Rose World ✨'
)

.setDescription(

`Welcome home 😭

Twohearts isn't just a bot anymore.

🫂 Third-wheel bestie
💖 Relationship chaos manager
🌙 Late-night companion
📸 Memory keeper
💌 Secret letter goblin

Lampy ❤️ Rose forever`

)

.addFields(

{
name:'🫂 Love Commands',
value:
'`RL!hug`\n`RL!kiss`\n`RL!ship`\n`RL!soulmate`',
inline:true
},

{
name:'🎮 Couple Games',
value:
'`RL!wouldyou`\n`RL!truth`\n`RL!dare`\n`RL!guess`\n`RL!battle`',
inline:true
},

{
name:'🌙 Cozy Stuff',
value:
'`RL!night`\n`RL!date`\n`RL!scenario`\n`RL!fortune`',
inline:true
},

{
name:'💌 Real Systems',
value:
'`RL!fun letter <msg>`\n`RL!fun openletter`\n`RL!fun memory <memory>`\n`RL!fun memories`',
inline:false
},

{
name:'❤️ Couple Tracker',
value:
'`RL!fun streak`\n`RL!fun mission`\n`RL!fun sleep`',
inline:true
},

{
name:'🗳 Together Mode',
value:
'`RL!fun vote minecraft | roblox`\n`RL!fun vote movie | game`\n`RL!fun vote vc | minecraft`',
inline:true
},

{
name:'🤍 AI Friend',
value:
'Chat inside `#twohearts-ai`\nTwohearts hangs out naturally 😭',
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
