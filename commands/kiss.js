module.exports = {

name:'kiss',

async execute(message,args){

const kisses=[

"💋 Lampy gently kissed Rose and forgot the rest of the world existed 😭",

"💕 Rose looked at Lampy for 2 seconds and bro instantly lost focus",

"✨ Twohearts detected dangerous levels of couple energy",

"🫠 Rose used forehead kiss. Lampy emotional damage taken: 999",

"😭 Lampy unlocked soft mode again",

"💖 The server witnessed a legendary kiss moment",

"🌙 Late-night kiss energy just hit different",

"💞 Relationship XP +500",

"🥹 Rose smiled... Lampy.exe stopped responding",

"💫 Twohearts: okay bro save some romance for tomorrow",

"💕 Lampy kissed Rose like she was his favorite place",

"😭 even the Discord server got shy",

"🌸 Softest moment unlocked",

"💖 Rose activated maximum heart-stealing powers",

"🫂 Couple buff increased",

"✨ Bro really looked at her like she was home",

"😭 Emotional support kiss deployed",

"💞 Love meter accidentally broke",

"🌙 Midnight vibes + kiss combo unlocked",

"🥹 Twohearts witnessed cinema-level romance"

];

const random=
kisses[
Math.floor(
Math.random()*kisses.length
)
];

message.reply(random);

}

};
