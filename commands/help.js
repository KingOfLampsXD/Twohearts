const { EmbedBuilder } = require('discord.js');

module.exports={

name:'help',

async execute(message){

const embed=
new EmbedBuilder()

.setTitle(
'💞 Twohearts — Lampy & Rose'
)

.setDescription(
'Your tiny world with Twohearts 😭✨'
)

.addFields(

{
name:'💖 Love',
value:
'`RL!hug`\n`RL!kiss`\n`RL!ship`\n`RL!soulmate`',
inline:true
},

{
name:'🎮 Games',
value:
'`RL!wouldyou`\n`RL!truth`\n`RL!dare`\n`RL!guess`\n`RL!battle`',
inline:true
},

{
name:'🌙 Cozy',
value:
'`RL!night`\n`RL!date`\n`RL!scenario`\n`RL!fortune`',
inline:true
},

{
name:'🤍 AI',
value:
'Talk inside `#twohearts-ai`\nTwohearts hangs out naturally 😭',
inline:false
}

)

.setFooter({

text:
'Lampy ❤️ Rose forever'

})

.setTimestamp();

message.reply({

embeds:[embed]

});

}

};
