module.exports={

name:'fun',

async execute(message,args){

const mode=
args[0]?.toLowerCase();

if(!mode){

return message.reply(

`💞 Twohearts Fun

RL!fun spin
RL!fun gift
RL!fun casino
RL!fun vc
RL!fun coin
RL!fun dice
RL!fun dailyhug

😭`

);

}


// SPIN

if(mode==="spin"){

const stuff=[

"🫂 Hug attack unlocked",

"💖 Send 2 compliments",

"🎮 Rose picks tonight's game",

"🌙 Late-night VC time",

"😭 Lampy owes affection tax",

"💕 Send random heart and disappear"

];

return message.reply(

stuff[
Math.floor(
Math.random()*stuff.length
)
]

);

}


// GIFT

if(mode==="gift"){

const gifts=[

"🌸 Flowers",

"🧸 Giant teddy",

"🍫 Chocolate",

"💌 Love letter",

"🎮 Minecraft date ticket",

"💖 999 affection points"

];

return message.reply(

`🎁 Gift:\n${
gifts[
Math.floor(
Math.random()*gifts.length
)
]
}`

);

}


// CASINO

if(mode==="casino"){

const emojis=[

"❤️",
"💖",
"✨",
"😭"

];

const a=
emojis[
Math.floor(Math.random()*4)
];

const b=
emojis[
Math.floor(Math.random()*4)
];

const c=
emojis[
Math.floor(Math.random()*4)
];

let result=
'try again 😭';

if(
a===b &&
b===c
){

result=
'JACKPOT +999 LOVE';

}

return message.reply(

`🎰

${a} ${b} ${c}

${result}`

);

}


// COIN

if(
mode==="coin"
){

return message.reply(

Math.random()<0.5
? "🪙 Heads"
:"🪙 Tails"

);

}


// DICE

if(
mode==="dice"
){

return message.reply(

`🎲 ${
1+
Math.floor(
Math.random()*6
)
}`

);

}


// DAILYHUG

if(
mode==="dailyhug"
){

const hugs=[

"🫂 Rose hugged Lampy so hard emotional damage reached 999",

"💕 cuddle combo activated",

"😭 affection increased"

];

return message.reply(

hugs[
Math.floor(
Math.random()*hugs.length
)
]

);

}


// VC

if(
mode==="vc"
){

const vc=[

"🌙 Join VC and only talk with emojis",

"🎮 Play one random game",

"💖 Say one wholesome thing",

"😭 communicate with memes only"

];

return message.reply(

vc[
Math.floor(
Math.random()*vc.length
)
]

);

}

message.reply(
'😭 unknown mode'
);

}

};
