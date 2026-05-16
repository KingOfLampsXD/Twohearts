module.exports = {

name:'kiss',

async execute(message,args){

const kisses=[

"💋 Lampy stole a kiss and ran 😭",

"😭 Rose used surprise kiss attack. Critical hit.",

"💕 Twohearts witnessed illegal levels of cuteness",

"✨ Relationship EXP +25",

"🫠 bro the romance stats just went up"

];

const random=

kisses[
Math.floor(
Math.random()*kisses.length
)
];

message.reply(
random
);

}

};
