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

You BOTH have 30 sec

Reply:

RL!answer your text

Secret answers 😭`

);


setTimeout(()=>{

const users=[...answers.keys()];


if(users.length<2){

message.channel.send(

"😭 confession failed not enough answers"

);

return;

}


const values=
[...answers.entries()];


message.channel.send(

`💌 Hidden Answers Revealed

${values[0][0]}:

${values[0][1]}

💞

${values[1][0]}:

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


return message.reply(

"🤫 answer saved"

);

}

}
};
