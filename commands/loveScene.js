const axios=require("axios");

module.exports={

name:"lovescene",

async execute(message,args){

const scene=
args[0]?.toLowerCase() || "cherry";

const prompts={

cherry:
"Minecraft style romantic artwork of Lampy and Rose sitting together under glowing cherry blossom trees, lanterns, pink petals, sunset, cozy couple energy",

campfire:
"Minecraft style Lampy and Rose beside a campfire under stars, romantic atmosphere",

moon:
"Minecraft style Lampy and Rose together on a rooftop under moonlight and lanterns",

sleepcall:
"Minecraft style Lampy and Rose sleeping during a late-night call, cozy room atmosphere"

};


try{

await message.reply(
"okay okay 😭 making you two adorable again..."
);


const create=
await axios.post(

"https://api.replicate.com/v1/models/black-forest-labs/flux-schnell/predictions",

{

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

let image=null;


for(let i=0;i<20;i++){

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

`😭 ${
err.response?.data?.detail ||
err.message
}`

);

}

}

};
