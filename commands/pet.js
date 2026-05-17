const fs=require("fs");

module.exports={

name:"pet",

async execute(message,args){

const action=
args[0]?.toLowerCase();

const path=
"./pet.json";

let pet;

if(fs.existsSync(path)){

pet=
JSON.parse(
fs.readFileSync(path)
);

}else{

pet=null;

}


if(action==="adopt"){

if(pet){

return message.reply(
`😭 you already adopted ${pet.name}`
);

}

pet={

name:"Mochi",

level:1,

love:50,

happy:50,

energy:50

};

fs.writeFileSync(
path,
JSON.stringify(
pet,
null,
2
)
);

return message.reply(
"🐰 Mochi joined Lampy + Rose 😭💞"
);

}


if(!pet){

return message.reply(
"😭 use RL!pet adopt first"
);

}


if(action==="feed"){

pet.happy+=5;
pet.energy+=5;

}


if(action==="play"){

pet.happy+=10;
pet.energy-=5;

}


if(action==="cuddle"){

pet.love+=10;

}


if(action==="sleep"){

pet.energy=100;

}


fs.writeFileSync(
path,
JSON.stringify(
pet,
null,
2
);


if(action==="stats"){

return message.reply(

`🐰 ${pet.name}

❤️ Love: ${pet.love}
✨ Happy: ${pet.happy}
⚡ Energy: ${pet.energy}
🌱 Level: ${pet.level}`

);

}


return message.reply(
`😭 ${pet.name} liked that`
);

}

};
