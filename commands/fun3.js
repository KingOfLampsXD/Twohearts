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
.slice(3)
.trim()
.split(/ +/)[0]
.toLowerCase();



if(cmd==="heartbeat"){

const n=
Math.floor(Math.random()*100);

return message.reply(
`❤️ Sync: ${n}%`
);

}



if(cmd==="sync"){

return message.reply(
`💞 Soul connection: ${Math.floor(Math.random()*100)}%`
);

}



if(cmd==="mood"){

const x=[

"clingy 😭",
"chaotic goblins",
"minecraft date mode",
"soft",
"sleepy"

];

return message.reply(

`😊 ${
x[
Math.floor(
Math.random()*x.length
)
]
}`

);

}



if(cmd==="dream"){

const x=[

"Rose stole fries 😭",

"minecraft wedding",

"Mochi became mayor"

];

return message.reply(

`💭 ${
x[
Math.floor(
Math.random()*x.length
)
]
}`

);

}



if(cmd==="chaos"){

return message.reply(
"💥 Cat invasion"
);

}



if(cmd==="cuddle"){

return message.reply(
"🫂 cuddle meter: 97%"
);

}



if(cmd==="kissmeter"){

return message.reply(
`💋 ${Math.floor(Math.random()*100)}%`
);

}



if(cmd==="sleepcall"){

return message.reply(
"🌙 survived another sleep call 😭"
);

}



if(cmd==="vibes"){

return message.reply(
"✨ soft + sleepy"
);

}



if(cmd==="pet"){

return message.reply(
"🐱 Mochi is eepy"
);

}



if(cmd==="adopt"){

return message.reply(
"🐰 Mochi joined"
);

}



if(cmd==="dailygift"){

return message.reply(
"🎁 +50 love coins"
);

}



if(cmd==="lovebank"){

return message.reply(
"💰 250 coins"
);

}



if(cmd==="fortune2"){

return message.reply(
"🔮 tomorrow = chaos"
);

}



if(cmd==="latecall"){

return message.reply(
"📞 3am energy"
);

}



if(cmd==="dateidea"){

return message.reply(
"🎮 roblox + vc"
);

}



if(cmd==="cringe"){

return message.reply(
"😭 illegal cuteness detected"
);

}



if(cmd==="memory"){

return message.reply(
"📸 old memory unlocked"
);

}



if(cmd==="distance"){

return message.reply(
"💞 distance losing again"
);

}



if(cmd==="compatibility"){

return message.reply(
`${Math.floor(Math.random()*100)}%`
);

}



if(cmd==="firstmove"){

return message.reply(
"👀 Rose probably"
);

}



if(cmd==="future"){

return message.reply(
"🏠 house + pets"
);

}



if(cmd==="stare"){

return message.reply(
Math.random()>.5
?
"👁 Lampy blinked"
:
"👁 Rose blinked"
);

}



if(cmd==="stealheart"){

return message.reply(
"💘 heart stolen"
);

}



if(cmd==="fate"){

return message.reply(
"✨ fate approved"
);

}



if(cmd==="blush"){

return message.reply(
"🥺 blush overload"
);

}



if(cmd==="mystery"){

return message.reply(
"📦 mystery cookie"
);

}



if(cmd==="wish"){

return message.reply(
"🌠 wish saved"
);

}



if(cmd==="obsessed"){

return message.reply(
`${Math.floor(Math.random()*100)}% obsessed 😭`
);

}



if(cmd==="mochi"){

return message.reply(
"🐱 Mochi demands attention"
);

}

}

};
