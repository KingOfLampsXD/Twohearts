const axios=require("axios");

module.exports={

name:"lovescene",

async execute(message,args){

const scene=
args[0]?.toLowerCase() || "cherry";

const prompts={

cherry:
`Minecraft style romantic artwork of Lampy and Rose using matching cute Minecraft skins, sitting together under glowing cherry blossom trees at sunset, lanterns, heart particles, cozy atmosphere, cinematic, adorable couple energy`,

campfire:
`Minecraft style Lampy and Rose sitting together beside a warm campfire at night, cozy romantic scene, lanterns and stars`,

night:
`Minecraft style Lampy and Rose together under moonlight and stars, cute romantic atmosphere`,

snow:
`Minecraft style Lampy and Rose holding hands in a snowy village, cozy winter romantic energy`,

sunset:
`Minecraft style Lampy and Rose watching sunset beside a lake, cinematic romantic atmosphere`

};

try{

await message.reply(
"okay okay 😭 making you two adorable again..."
);


// create image job

const create=
await axios.post(

"https://api.replicate.com/v1/predictions",

{

version:
"black-forest-labs/flux-schnell",

input:{

prompt:
prompts[scene] ||
prompts.cherry

}

},

{

headers:{

Authorization:
`Token ${process.env.REPLICATE_API_TOKEN}`,

"Content-Type":
"application/json"

}

}

);


const id=
create.data.id;


// wait

let image=null;

for(let i=0;i<15;i++){

await new Promise(
r=>setTimeout(r,2000)
);

const poll=
await axios.get(

`https://api.replicate.com/v1/predictions/${id}`,

{

headers:{

Authorization:
`Token ${process.env.REPLICATE_API_TOKEN}`

}

}

);

if(
poll.data.status==="succeeded"
){

image=
poll.data.output?.[0];

break;

}

}


if(!image){

return message.reply(
"😭 image took too long"
);

}


return message.channel.send({

content:
"Twohearts cooked 😭💞",

files:[
image
]

});


}catch(err){

console.log(
err.response?.data || err
);

return message.reply(
"😭 scene machine exploded"
);

}

}

};
