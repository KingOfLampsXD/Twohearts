const fs=require("fs");

module.exports={

name:"attack",

async execute(message){

const data=

JSON.parse(
fs.readFileSync(
"./data/dungeon.json",
"utf8"
)
);

const id="lampyrose";

if(!data[id])
return message.reply(
"start dungeon first 😭"
);


let game=data[id];

const damage=

Math.floor(
Math.random()*18
)+8;


game.enemy.hp-=damage;


const enemyHit=

Math.floor(
Math.random()*
game.enemy.atk
)+1;


game.lampy-=enemyHit;
game.rose-=enemyHit;


if(game.enemy.hp<=0){

game.xp+=50;


if(game.xp>=100){

game.level++;

game.maxHp+=25;

game.lampy=
game.maxHp;

game.rose=
game.maxHp;

}


message.channel.send(

`🏆 defeated

${game.enemy.name}

+50 XP

Level:
${game.level}`

);

delete data[id];

fs.writeFileSync(
"./data/dungeon.json",
JSON.stringify(
data,
null,
2
)
);

return;

}


fs.writeFileSync(
"./data/dungeon.json",
JSON.stringify(
data,
null,
2
)
);


message.channel.send(

`⚔️ ${damage}
damage

${game.enemy.name}

HP:
${game.enemy.hp}

Enemy hit back:

-${enemyHit}`

);

}

}
