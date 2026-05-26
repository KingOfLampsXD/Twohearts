const fs=require("fs");

module.exports={

name:"stats",

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
return;


const g=data[id];


message.channel.send(

`📊 LOVE STATS

❤️ Lampy:
${g.lampy}/${g.maxHp}

💖 Rose:
${g.rose}/${g.maxHp}

🌸 Level:
${g.level}

✨ XP:
${g.xp}/100

🛡️ Shield:
${g.shield}

👹 Enemy:

${g.enemy.name}

HP:
${g.enemy.hp}`

);

}

}
