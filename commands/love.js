module.exports={

name:'love',

async execute(message,args){

const mode=
args[0]?.toLowerCase();

if(!mode){

return message.reply(

`💞 Love Pack

RL!love mood
RL!love pickup
RL!love rate
RL!love wish
RL!love promise
RL!love nick
RL!love challenge
RL!love emoji
RL!love song
RL!love countdown`

);

}


/* MOOD */

if(mode==="mood"){

const moods=[

"💖 Love energy: 99%",

"😭 Missing each other detected",

"🌙 Cozy mode activated",

"✨ Chaos + affection combo"

];

return message.reply(
moods[Math.floor(Math.random()*moods.length)]
);

}


/* PICKUP */

if(mode==="pickup"){

const lines=[

"bro 😭 even wifi distance lost",

"💞 illegal levels of cute detected",

"✨ relationship update: still winning"

];

return message.reply(
lines[Math.floor(Math.random()*lines.length)]
);

}


/* RATE */

if(mode==="rate"){

return message.reply(

`💖 Couple rating:

${95+Math.floor(Math.random()*6)}/100`

);

}


/* WISH */

if(mode==="wish"){

const wishes=[

"🌠 future minecraft night",

"💞 extra cuddle points",

"😭 unlimited late-night time"

];

return message.reply(
wishes[Math.floor(Math.random()*wishes.length)]
);

}


/* PROMISE */

if(mode==="promise"){

const p=[

"💖 Promise: always send memes",

"🫂 Promise: affection tax forever",

"🌙 Promise: never skip soft hours"

];

return message.reply(
p[Math.floor(Math.random()*p.length)]
);

}


/* NICK */

if(mode==="nick"){

const n=[

"😭 tiny gremlin",

"💞 cuddle thief",

"✨ professional heart stealer"

];

return message.reply(
n[Math.floor(Math.random()*n.length)]
);

}


/* CHALLENGE */

if(mode==="challenge"){

const c=[

"Send 2 compliments",

"Send random heart",

"Say something wholesome"

];

return message.reply(
`🎯 ${c[Math.floor(Math.random()*c.length)]}`
);

}


/* EMOJI */

if(mode==="emoji"){

const e=[

"😭💞✨",

"🫂🌙💖",

"🥺💌😭"

];

return message.reply(
e[Math.floor(Math.random()*e.length)]
);

}


/* SONG */

if(mode==="song"){

const s=[

"🎵 Minecraft sunset playlist time",

"🎵 soft late-night song energy",

"🎵 emotional damage playlist"

];

return message.reply(
s[Math.floor(Math.random()*s.length)]
);

}


/* COUNTDOWN */

if(mode==="countdown"){

return message.reply(

`⏳

Time until next affection wave:

3...

2...

1...

💖`

);

}

message.reply(
'😭 unknown mode'
);

}

};
