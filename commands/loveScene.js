const axios=require("axios");

module.exports={

name:"lovescene",

async execute(message,args){

const scene=
args[0]?.toLowerCase() || "cherry";


const scenes={

cherry:
`Minecraft style romantic artwork of Lampy and Rose together beneath glowing cherry blossom trees, pink petals floating, lanterns, heart particles, sunset lighting, cozy atmosphere, adorable couple energy, cinematic`,

campfire:
`Minecraft style Lampy and Rose sitting beside a warm campfire at night, stars above, lanterns, cozy romantic scene`,

night:
`Minecraft style Lampy and Rose together under moonlight and stars, dreamy romantic atmosphere`,

snow:
`Minecraft style Lampy and Rose holding hands in a snowy village at night, cozy winter romance`,

sunset:
`Minecraft style Lampy and Rose sitting near a lake watching sunset together, cinematic romantic energy`

};


try{


if(!process.env.REPLICATE_API_TOKEN){

return message.reply(
"😭 replicate token missing"
);

}


await message.reply(
"okay okay 😭 making you two adorable again..."
);


const create=
await axios.post(

"https://api.replicate.com/v1/predictions",

{

version:
"black-forest-labs/flux-schnell",

input:{

prompt:
scenes[scene] ||
scenes.cherry,

aspect_ratio:
"16:9"

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


const predictionId=
create.data.id;

let image=null;


// wait for generation

for(let i=0;i<25;i++){

await new Promise(
r=>setTimeout(r,2000)
);


const poll=
await axios.get(

`https://api.replicate.com/v1/predictions/${predictionId}`,

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


if(
poll.data.status==="failed"
){

throw new Error(
poll.data.error ||
"generation failed"
);

}

}


if(!image){

return message.reply(
"😭 image took too long try again"
);

}


return message.channel.send({

content:
"Twohearts cooked something 😭💞",

files:[
image
]

});


}catch(err){

console.log(
"LOVE SCENE ERROR:"
);

console.log(
err.response?.data || err
);


return message.reply(

`😭 ${
err.response?.data?.detail ||
err.response?.data?.error ||
err.message ||
"something broke"
}`

);

}

}

};
