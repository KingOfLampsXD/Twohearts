module.exports={

name:'battle',

async execute(message){

const scenes=[

{
title:"🫂 Cuddle Battle",
lampy:"Lampy tried pulling Rose into cuddle jail 😭",
rose:"Rose countered with surprise forehead kiss powers 💕"
},

{
title:"💖 Love Battle",
lampy:"Lampy used maximum attention attack",
rose:"Rose activated wife energy and reflected it back 😭"
},

{
title:"🌙 Midnight Battle",
lampy:"Lampy attempted emotional support mode",
rose:"Rose used soft voice powers 💀"
},

{
title:"🎮 Minecraft Battle",
lampy:"Lampy built a defense wall",
rose:"Rose appeared with emotional damage enchantment 😭"
}

];

const scene=
scenes[
Math.floor(
Math.random()*scenes.length
)
];

const lampy=
Math.floor(
1+Math.random()*100
);

const rose=
Math.floor(
1+Math.random()*100
);

let ending='';

if(lampy>rose){

ending=
"🏆 Lampy wins... then instantly gives Rose a hug because bro folded 😭💞";

}

else if(
rose>lampy
){

ending=
"🏆 Rose wins and immediately steals all the affection points 💕";

}

else{

ending=
"😭 DRAW. They stopped fighting and became soft again";

}

message.reply(

`${scene.title}

⚔️ Round Start

${scene.lampy}

${scene.rose}

Lampy Power:
${lampy} ❤️

Rose Power:
${rose} ❤️

${ending}`

);

}

};
