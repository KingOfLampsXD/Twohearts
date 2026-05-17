const fs=require("fs");

const{
ActionRowBuilder,
ButtonBuilder,
ButtonStyle,
EmbedBuilder
}=require("discord.js");

module.exports={

name:"catchheart",

async execute(message){

const path="./heartgame.json";

let data;

if(fs.existsSync(path)){

data=
JSON.parse(
fs.readFileSync(path)
);

}else{

data={

streak:0,
bond:0,
shards:0,
saved:0

};

}


function save(){

fs.writeFileSync(
path,
JSON.stringify(
data,null,2)
);

}


const embed=
new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"💖 Tiny Heart Alert"
)

.setDescription(

`A tiny heart escaped 😭

Someone do something FAST

10 seconds...`

);


const row=
new ActionRowBuilder()

.addComponents(

new ButtonBuilder()

.setCustomId(
"grab"
)

.setLabel(
"Grab 💞"
)

.setStyle(
ButtonStyle.Danger
),

new ButtonBuilder()

.setCustomId(
"protect"
)

.setLabel(
"Protect 🛡"
)

.setStyle(
ButtonStyle.Success
),

new ButtonBuilder()

.setCustomId(
"ignore"
)

.setLabel(
"Ignore 😭"
)

.setStyle(
ButtonStyle.Secondary
)

);


const msg=
await message.reply({

embeds:[
embed
],

components:[
row
]

});


let grabbed=false;

const collector=
msg.createMessageComponentCollector({

time:10000

});


collector.on(
"collect",

async(i)=>{

if(
grabbed
){

return i.reply({

content:
"😭 too slow",

ephemeral:true

});

}


grabbed=true;

let text="";


if(
i.customId==="grab"
){

data.saved++;

data.shards++;

data.bond+=2;

data.streak++;

text=

`💞 ${i.user.username} grabbed the heart

✨ +1 shard
❤️ +2 bond

🔥 streak:
${data.streak}`;


}


if(
i.customId==="protect"
){

data.saved++;

data.bond+=4;

data.streak++;

text=

`🛡 ${i.user.username} protected the tiny heart

❤️ +4 bond

🔥 streak:
${data.streak}`;

}


if(
i.customId==="ignore"
){

data.streak=0;

text=

`😭 ${i.user.username}

THE HEART GOT AWAY`;

}


save();


const unlocked=[];


if(
data.shards>=10
){

unlocked.push(
"🌸 Cherry Heart"
);

}


if(
data.shards>=25
){

unlocked.push(
"🌙 Moon Heart"
);

}


if(
data.shards>=50
){

unlocked.push(
"💞 Soul Collection"
);

}


const done=
new EmbedBuilder()

.setColor(
"#ff7eb6"
)

.setTitle(
"💖 Heart Result"
)

.setDescription(

`${text}

❤️ Total Bond:
${data.bond}

💎 Shards:
${data.shards}

🫂 Saved:
${data.saved}

${
unlocked.length
?
`\nUnlocked:\n${unlocked.join("\n")}`
:
""
}`

);


collector.stop();


return i.update({

embeds:[
done
],

components:[]

});

});


collector.on(
"end",

async()=>{

if(
grabbed
)
return;

data.streak=0;

save();

const fail=
new EmbedBuilder()

.setColor(
"Red"
)

.setTitle(
"😭 too late"
)

.setDescription(

`The tiny heart escaped

streak lost`

);

msg.edit({

embeds:[
fail
],

components:[]

});

});

}

};
