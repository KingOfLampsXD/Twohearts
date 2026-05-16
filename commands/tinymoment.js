module.exports={

name:"tinymoment",

async execute(message){

const moments=[

"Rose stole Lampy's hoodie and now claims ownership 😭💞",

"you both joined VC and spent 10 minutes saying 'you talk first'",

"Lampy said 'goodnight' and appeared online 37 minutes later",

"Rose found an old screenshot and now both of you are emotional 😭",

"minecraft date started and instantly became chaos",

"you two opened Roblox and somehow never picked a game",

"Rose sent 'baby' and Lampy's brain stopped working",

"both of you started staring at each other's status for no reason",

"you accidentally stayed on call way longer than planned",

"Lampy and Rose discovered a meme and laughed way too hard",

"one of you said '5 more mins'... biggest lie ever 😭",

"Twohearts saw you two being cute again and is third-wheeling"

];

const random=
moments[
Math.floor(
Math.random()*moments.length
)
];

return message.reply(

`✨ tiny moment\n\n${random}`

);

}

};
