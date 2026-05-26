const fs=require("fs");

module.exports={

name:"dungeon",

async execute(message){

let data={};

if(fs.existsSync("./data/dungeon.json")){

data=JSON.parse(
fs.readFileSync(
"./data/dungeon.json",
"utf8"
));

}

const id="lampyrose";


const enemies=[

{
name:"🐱 Mochi Goblin",
hp:60,
atk:6
},

{
name:"😭 Distance Monster",
hp:120,
atk:15
},

{
name:"👻 Dry Texter",
hp:80,
atk:8
},

{
name:"🐉 Wifi Dragon",
hp:200,
atk:20
}

];


const enemy=

enemies[
Math.floor(
Math.random()*
enemies.length
)
];


data[id]={

lampy:100,
rose:100,

maxHp:100,

level:1,
xp:0,

shield:0,

enemy

};


fs.writeFileSync(
"./data/dungeon.json",
JSON.stringify(
data,
null,
2
)
);


message.channel.send(

`🌸 LOVE DUNGEON STARTED

❤️ Lampy HP:
100/100

💖 Rose HP:
100/100

Enemy:

${enemy.name}

HP:
${enemy.hp}

Use:

RL!attack
RL!hug
RL!protect
RL!heal
RL!stats`

);

}

}
