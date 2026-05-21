module.exports={

name:"rose",

async execute(message){

const words=[

"my baby 💞",
"my janu",
"meri jaan",
"meri pookie",
"my princess",
"my angel",
"my world",
"my sweetheart",
"meri queen",
"my cutie",
"my sunshine",
"my pretty girl",
"my wife ",
"my forever",
"meri life",
"my comfort",
"my home",
"meri doll",
"my heartbeat",
"my flower",
"my rose 🌹",
"my moon",
"my everything",
"my sleepy baby",
"my favorite person",
"my lovebug",
"my softie",
"my snuggle bug",
"my sweet potato ",
"my tiny chaos",
"my teddy",
"my happiness",
"my soul",
"my cupcake",
"my little goblin ",
"my beautiful human",
"my pretty soul",
"my star",
"my cutest person",
"my forever person"
"my wife 😭💍",
"meri jaan",
"my soulmate",
"my forever person",
"my home",
"my universe",
"my reason to smile",
"my comfort person",
"my favorite notification 😭",
"the person i wanna annoy forever",
"my safe place",
"my future",
"my heartbeat",
"my late night person",
"my sleepy vc partner 🌙",
"my minecraft wife 😭",
"the person i wanna marry again",
"my daily happiness",
"my one and only",
"my forever and ever",
"the person i miss in 2 seconds",
"my favorite human",
"my addiction 😭",
"my tiny chaos",
"my cuddle person",
"my always",
"my everything",
"my person",
"my pretty girl",
"the person i want every future with",
"my distance fighter 💞",
"my cutest problem",
"my heart owner",
"my forever home",
"my last choice and first choice",
"my whole world",
"my entire heart",
"my permanent person",
"my 'stay on call 5 more mins' person 😭",
"the person i wanna wake up beside someday",
"the person i accidentally loved too much",
"my favorite chapter",
"my forever vc buddy",
"the owner of my heart",
"my princess",
"my moon",
"my rose 🌹",
"the reason my phone battery dies 😭",
"my future house partner 🏠",
"my forever wife 💍"

];


message.reply(
"🌹 Rose mode started 😭💞"
);


const interval=setInterval(()=>{

const word=

words[
Math.floor(
Math.random()*words.length
)
];


message.channel.send(

`${word}

-Lampy 💞`

);

},10000);



setTimeout(()=>{

clearInterval(
interval
);

message.channel.send(
"😭 Rose mode ended"
);

},300000);

}

};
