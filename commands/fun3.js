module.exports={

name:"heartbeat",

aliases:[
"sync",
"mood",
"dream",
"chaos",
"cuddle",
"kissmeter",
"sleepcall",
"vibes",
"pet",
"adopt",
"dailygift",
"lovebank",
"fortune2",
"latecall",
"dateidea",
"cringe",
"memory",
"distance",
"compatibility",
"firstmove",
"future",
"stare",
"stealheart",
"fate",
"blush",
"mystery",
"wish",
"obsessed",
"mochi"
],

async execute(message,args){

const cmd=
message.content
.toLowerCase()
.replace(/^rl!/,"")
.split(/ +/)[0];



const responses={

heartbeat:()=>`❤️ Heart sync: ${Math.floor(Math.random()*100)}%`,

sync:()=>`💞 Soul connection: ${Math.floor(Math.random()*100)}%`,

mood:()=>{

const x=[
"clingy 😭",
"chaotic goblins 😭",
"minecraft date mode",
"soft",
"sleepy"
];

return `😊 ${x[Math.floor(Math.random()*x.length)]}`;

},

dream:()=>{

const x=[
"Rose stole fries 😭",
"minecraft wedding 😭",
"Mochi became mayor 😭"
];

return `💭 ${x[Math.floor(Math.random()*x.length)]}`;

},

chaos:()=>
"💥 Cat invasion detected",

cuddle:()=>
"🫂 cuddle meter: 97%",

kissmeter:()=>
`💋 Kiss power: ${Math.floor(Math.random()*100)}%`,

sleepcall:()=>
"🌙 survived another sleep call 😭",

vibes:()=>
"✨ current vibes: soft + sleepy",

pet:()=>
"🐱 Mochi is eepy",

adopt:()=>
"🐰 Mochi joined the family 😭",

dailygift:()=>
"🎁 +50 love coins",

lovebank:()=>
`💰 Love bank: ${Math.floor(Math.random()*500)} coins`,

fortune2:()=>
"🔮 tomorrow contains chaos",

latecall:()=>
"📞 3AM energy activated",

dateidea:()=>{

const x=[
"🎮 Roblox + VC",
"🍿 Watch movie together",
"🌙 Sleepcall + music",
"🧸 Build Minecraft house"
];

return x[Math.floor(Math.random()*x.length)];

},

cringe:()=>
"😭 illegal levels of cuteness detected",

memory:()=>
"📸 old memory unlocked",

distance:()=>
"💞 distance losing again",

compatibility:()=>
`💞 Compatibility: ${Math.floor(Math.random()*100)}%`,

firstmove:()=>
"👀 Rose probably",

future:()=>
"🏠 future detected: house + pets",

stare:()=>Math.random()>.5
?
"👁 Lampy blinked first 😭"
:
"👁 Rose blinked first 😭",

stealheart:()=>
"💘 heart stolen successfully",

fate:()=>
"✨ fate approved",

blush:()=>
"🥺 blush overload",

mystery:()=>{

const x=[

"📦 mystery cookie",
"🧸 tiny plush",
"🍪 half eaten cookie",
"💖 secret love note"

];

return x[
Math.floor(
Math.random()*x.length
)
];

},

wish:()=>
"🌠 wish stored safely",

obsessed:()=>
`${Math.floor(Math.random()*100)}% obsessed 😭`,

mochi:()=>{

const x=[

"🐱 Mochi demands attention",

"🐱 Mochi stole food",

"🐱 Mochi is staring",

"🐱 Mochi fell asleep"

];

return x[
Math.floor(
Math.random()*x.length
)
];

}

};



if(responses[cmd]){

return message.reply(
responses[cmd]()
);

}

}

};
