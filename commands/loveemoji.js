module.exports={

name:"loveemoji",
aliases:["le","spamlove"],

async execute(message){


const emojis=[

"<:emoji_19:PUT_ID>",
"<:emoji_18:PUT_ID>",
"<:emoji_21:PUT_ID>",
"<:d_:PUT_ID>"

];


const texts=[

"💞 Lampy refusing to let Rose escape 😭",
"🌸 max level clingy detected",
"😭 Twohearts saw this and died",
"💖 affection overload",
"🌙 stay 5 more mins...",
"🐱 Mochi approved this love",
"💞 roommate report: they stuck together again",
"😭 bro they're inseparable"

];


const emoji=
emojis[
Math.floor(
Math.random()*emojis.length
)
];


const text=
texts[
Math.floor(
Math.random()*texts.length
)
];


message.channel.send(
`${emoji} ${text}`
);


}

}
