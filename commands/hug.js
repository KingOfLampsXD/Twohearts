module.exports = {

name:'hug',

async execute(message,args){

const hugs=[

"💖 Lampy gave Rose the biggest hug ever 😭",

"🫂 Rose activated cuddle mode",

"💕 Twohearts witnessed maximum love energy",

"😭 Lampy and Rose unlocked comfort buff +100",

"✨ emergency hug deployed"

];

const random=

hugs[
Math.floor(
Math.random()*hugs.length
)
];

message.reply(
random
);

}

};
