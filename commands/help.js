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

Twohearts is your tiny third-wheel bestie living inside the server.

Built for:
💖 Love
🎮 Chaos
🌙 Late nights
🫂 Soft moments
✨ Lampy + Rose forever`

)

.addFields(

{
name:'🫂 Love Stuff',
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
name:'🌙 Cozy Mode',
value:
'`RL!night`\n`RL!date`\n`RL!scenario`\n`RL!fortune`',
inline:true
},

{
name:'🎲 Fun Box',
value:
'`RL!fun spin`\n`RL!fun gift`\n`RL!fun casino`\n`RL!fun vc`\n`RL!fun coin`\n`RL!fun dice`\n`RL!fun dailyhug`',
inline:false
},

{
name:'🤍 AI Friend',
value:
'Chat in `#twohearts-ai`\nTwohearts hangs around and reacts naturally 😭',
inline:false
}

)

.setThumbnail(
message.guild.iconURL()
)

.setFooter({

text:
'Lampy ❤️ Rose • Distance tried, love said nope 😭'

})

.setTimestamp();

return message.reply({

embeds:[embed]

});

}

};
