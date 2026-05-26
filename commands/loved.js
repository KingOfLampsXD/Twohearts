const {
EmbedBuilder
}=require("discord.js");

module.exports={

name:"loved",
aliases:["loveletter","ll"],

async execute(message){

const starts=[

"💌 Dear Rose,",
"🌸 My favorite person,",
"💞 Tiny message for you,",
"🌙 Late night thoughts:",
"😭 Emergency heart report:"
];

const actions=[

"you stole",
"you accidentally hacked",
"you quietly collected",
"you kidnapped",
"you completely destroyed",
"you secretly upgraded"
];

const targets=[

"my heart",
"my sleep schedule",
"my entire brain",
"my attention span",
"my daily happiness",
"my favorite moments",
"my world"
];

const endings=[

"and I still want more 😭💞",
"now escape is impossible.",
"mission failed successfully.",
"and I blame you.",
"forever accepted.",
"relationship level increased.",
"now we're stuck together."
];

const extras=[

"🌸 +100 clingy XP",
"💖 Rose used: smile",
"😭 Lampy stopped functioning",
"🌙 Maximum blush detected",
"💍 Love level up",
"🐱 Mochi approves this"
];

const gifs=[

"https://media.tenor.com/4N6kK7Y4F6QAAAAd/anime-love.gif",
"https://media.tenor.com/y2w6sY0l2r8AAAAd/cute-anime-hug.gif",
"https://media.tenor.com/WK_Ds6P7A5EAAAAd/couple-anime.gif",
"https://media.tenor.com/8of4p8G7KfUAAAAd/love-heart.gif"

];


const text=

`${starts[Math.floor(Math.random()*starts.length)]}

You ${actions[Math.floor(Math.random()*actions.length)]}
${targets[Math.floor(Math.random()*targets.length)]}

${endings[Math.floor(Math.random()*endings.length)]}

${extras[Math.floor(Math.random()*extras.length)]}`;


const embed=
new EmbedBuilder()

.setColor("#ff7eb6")
.setTitle("💞 Loved.exe")
.setDescription(text)
.setImage(
gifs[
Math.floor(
Math.random()*gifs.length
)
]
)
.setFooter({
text:"Lampy ❤️ Rose forever"
});


message.reply({
embeds:[embed]
});

}

};
