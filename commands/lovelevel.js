const fs=require("fs");
const {EmbedBuilder}=require("discord.js");

module.exports={

name:"lovelevel",

async execute(message){

const data=JSON.parse(

fs.readFileSync(
"./data/lovepoints.json",
"utf8"
)

);

const user="lampyrose";


if(!data[user]){

data[user]={

points:0,
level:1

};

}


const points=
data[user].points;

const level=
data[user].level;


const needed=
level*100;


const percent=

Math.floor(

(points/needed)*100

);


const bars=

"█".repeat(
Math.floor(percent/10)
)

+

"░".repeat(
10-Math.floor(percent/10)
);


let title=
"🌱 Tiny Gremlins";


if(level>=3)
title="🌙 Sleep Call Gremlins";

if(level>=5)
title="🐱 Mochi Parents";

if(level>=10)
title="💞 Soul Pair";

if(level>=20)
title="😭 Distance Destroyers";


const embed=

new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"💞 Lampy + Rose"
)

.setDescription(

`Level: ${level}

Points:
${points}/${needed}

Title:
${title}

Progress:

${bars}

${percent}% 😭`

);

message.reply({

embeds:[embed]

});

}

};
