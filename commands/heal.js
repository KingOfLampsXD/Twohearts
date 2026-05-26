const fs=require("fs");

module.exports={

name:"heal",

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


data[id]
.lampy+=20;

data[id]
.rose+=20;


if(
data[id].lampy>
data[id].maxHp
)

data[id].lampy=
data[id].maxHp;


if(
data[id].rose>
data[id].maxHp
)

data[id].rose=
data[id].maxHp;


fs.writeFileSync(
"./data/dungeon.json",
JSON.stringify(
data,
null,
2
)
);


message.channel.send(

`💖 healed +20`

);

}

}
