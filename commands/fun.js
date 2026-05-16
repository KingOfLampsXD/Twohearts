const fs=require('fs');

module.exports={

name:'fun',

async execute(message,args){

const mode=
args[0]?.toLowerCase();

const text=
args.slice(1).join(' ');

const file=
'coupledata.json';

let data={

letters:[],
memories:[],
streak:0

};

if(fs.existsSync(file)){

data=
JSON.parse(
fs.readFileSync(
file
)
);

}

if(!mode){

return message.reply(

`💞 Twohearts Systems

💌 RL!fun letter <msg>
💌 RL!fun openletter

📸 RL!fun memory <memory>
📸 RL!fun memories

❤️ RL!fun streak

🎯 RL!fun mission

🗳 RL!fun vote option1 | option2

🌙 RL!fun sleep

✨ Twohearts remembers things now 😭`

);

}


/* LETTER */

if(mode==="letter"){

if(!text){

return message.reply(
'😭 write a message'
);

}

data.letters.push({

author:
message.author.username,

text

});

fs.writeFileSync(
file,
JSON.stringify(
data,
null,
2
)
);

return message.reply(
'💌 secret letter saved'
);

}


/* OPEN LETTER */

if(mode==="openletter"){

if(
data.letters.length===0
){

return message.reply(
'😭 no letters'
);

}

const random=

data.letters[
Math.floor(
Math.random()*
data.letters.length
)
];

return message.reply(

`💌 Letter

From:
${random.author}

"${random.text}"`

);

}


/* MEMORY */

if(mode==="memory"){

if(!text){

return message.reply(
'😭 add memory'
);

}

data.memories.push(text);

fs.writeFileSync(
file,
JSON.stringify(
data,
null,
2
)
);

return message.reply(
'📸 memory saved 😭'
);

}


/* MEMORIES */

if(mode==="memories"){

if(
data.memories.length===0
){

return message.reply(
'😭 empty memories'
);

}

return message.reply(

`📸 Memories

${
data.memories
.map(
(x,i)=>
`${i+1}. ${x}`
)
.join('\n')
}`

);

}


/* STREAK */

if(
mode==="streak"
){

data.streak++;

fs.writeFileSync(
file,
JSON.stringify(
data,
null,
2
)
);

return message.reply(

`❤️ Lampy + Rose

Love streak:
${data.streak}

😭`

);

}


/* MISSION */

if(
mode==="mission"
){

const missions=[

"Send one compliment 😭",

"Send one meme",

"Join VC for 2 mins",

"Say one wholesome thing",

"Play together later",

"Spam hearts 💖"

];

return message.reply(

`🎯 Mission

${
missions[
Math.floor(
Math.random()*
missions.length
)
]
}`

);

}


/* SLEEP */

if(
mode==="sleep"
){

return message.reply(

`🌙

${message.author.username}

said goodnight first 😭💞`

);

}


/* VOTE */

if(
mode==="vote"
){

const split=
text.split('|');

if(
split.length<2
){

return message.reply(
'example:\nRL!fun vote minecraft | roblox'
);

}

const msg=
await message.channel.send(

`🗳 Vote

1️⃣ ${
split[0]
}

2️⃣ ${
split[1]
}`

);

await msg.react(
'1️⃣'
);

await msg.react(
'2️⃣'
);

return;

}

message.reply(
'😭 unknown mode'
);

}

};
