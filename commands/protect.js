const fs=require("fs");

module.exports={

name:"protect",

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
.shield+=35;


fs.writeFileSync(
"./data/dungeon.json",
JSON.stringify(
data,
null,
2
)
);


message.channel.send(
"🛡️ protection activated 😭"
);

}

}
