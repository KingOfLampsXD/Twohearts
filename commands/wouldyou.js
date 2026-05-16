module.exports = {

name:'wouldyou',

async execute(message){

const questions=[

"🌙 Stay up all night talking or watch a sunset together?",

"🎮 Minecraft date or movie night together?",

"🍕 Share one pizza forever or one blanket forever 😭",

"💞 Cuddles every day or forehead kisses every day?",

"🌧️ Rain walk together or late-night call together?",

"✨ Hold hands all day or hug every hour?",

"😭 Spam each other all day or surprise texts?",

"🎧 Listen to music together or game together?",

"🌸 Morning goodnight texts— wait 😭 morning GOOD MORNING texts or midnight talks?",

"🫂 One giant hug or 100 tiny hugs?"

];

const random=
questions[
Math.floor(
Math.random()*questions.length
)
];

message.reply(
random
);

}

};
