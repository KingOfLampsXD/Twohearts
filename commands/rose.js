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
