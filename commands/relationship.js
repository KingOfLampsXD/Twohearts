const answers=new Map();

module.exports={

name:"confess",

aliases:[

"3am",
"heartbeatrace",
"answer"

],

async execute(message,args){

const cmd=

message.content

.toLowerCase()

.replace(/^rl!/,"")

.split(/ +/)[0];



if(cmd==="confess"){

answers.clear();

await message.reply(

`💞 Confession Night

You BOTH have 30 sec 😭

Reply using:

RL!answer your text

Nobody sees answers.`

);


setTimeout(()=>{


const users=

[...answers.keys()];


if(users.length<2){

message.channel.send(

"😭 confession failed\nnot enough answers"

);

answers.clear();

return;

}



const values=

[...answers.entries()];


message.channel.send(

`💌 Hidden Answers Revealed

🤍 ${values[0][0]}:

${values[0][1]}


💞


🤍 ${values[1][0]}:

${values[1][1]}


+50 Love Points 😭`

);


answers.clear();

},30000);


return;

}





if(cmd==="answer"){

const text=

args.join(" ");


if(!text){

return message.reply(

"😭 say something"

);

}


answers.set(

message.author.username,

text

);



// delete message instantly

message.delete()

.catch(()=>{});



// DM confirmation

message.author.send(

"🤫 confession saved"

)

.catch(()=>{});


return;

}





if(
cmd==="3am"
){

const questions=[

"if you were here rn i would ____",

"one thing i secretly miss is ____",

"stay 5 more mins because ____",

"distance disappears and suddenly ____",

"late night thought: ____"

];


return message.reply(

`🌙 3AM Mode 😭

${
questions[
Math.floor(
Math.random()
*
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

Spam ❤️

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

reaction?.count-1
||0;


message.channel.send(

`😭 HEART ATTACK ENERGY

❤️:
${count}`

);

},

15000

);


return;

}


}

};
