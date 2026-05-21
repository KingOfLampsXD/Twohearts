const {
EmbedBuilder
}=require("discord.js");

module.exports={

name:"confess",

aliases:[

"3am",
"heartbeatrace"

],

async execute(message,args){

const cmd=

message.content

.toLowerCase()

.replace(/^rl!/,"")

.split(/ +/)[0];



if(cmd==="confess"){

await message.reply(

`💞 Confession Night

You have 30 sec.

Reply with:

RL!answer your message

without seeing the other person's answer 😭`

);

return;

}



if(cmd==="3am"){

const questions=[

'if you were here rn i would ____',

'one thing i secretly miss is ____',

'late night thought: ____',

'if distance vanished rn: ____',

'stay 5 more mins because ____'

];


return message.reply(

`🌙 3AM Mode 😭

${

questions[
Math.floor(
Math.random()*
questions.length
)
]

}`

);

}



if(
cmd==="heartbeatrace"
){

const msg=

await message.reply(

`❤️ HEARTBEAT RACE

Spam ❤️ reaction

15 sec 😭`

);


await msg.react(
"❤️"
);


setTimeout(

async()=>{

const fetched=

await msg.fetch();


const reaction=

fetched.reactions.cache.get(
"❤️"
);


const count=

reaction?.count-1 || 0;


message.channel.send(

`😭 HEART ATTACK ENERGY

❤️:
${count}`

);

},

15000

);

}

}

};
