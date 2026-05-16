module.exports={

name:'ship',

async execute(message){

const percent=
Math.floor(
90 + Math.random()*11
);

const lines=[

"😭 bro this isn't even a ship anymore, it's permanent DLC",

"💕 Twohearts checked the love database and gave up",

"✨ relationship status: ridiculously adorable",

"🫠 emotional damage to single people detected",

"💞 certified power couple energy",

"🌙 even late-night Discord servers felt that one",

"😭 love levels exceeded safe limits",

"💖 server hearts just increased by +100",

"✨ Rose + Lampy = unfair matchmaking",

"🫂 friendship? nah, legendary duo unlocked"

];

const random=

lines[
Math.floor(
Math.random()*lines.length
)
];

message.reply(

`💘 Ship Results

Lampy ❤️ Rose

Compatibility:
${percent}%

${random}`

);

}

};
