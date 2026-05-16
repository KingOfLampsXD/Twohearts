const axios=require("axios");

module.exports={

name:"lovescene",

async execute(message,args){

const scene=
args[0]?.toLowerCase() || "cherry";

const prompts={

cherry:
`Minecraft style romantic artwork of Lampy and Rose together under glowing cherry blossom trees, lanterns, pink petals, heart particles, cozy atmosphere, cinematic, cute couple energy`,

campfire:
`Minecraft style Lampy and Rose beside a warm campfire at night, stars above, cozy romantic energy`,

night:
`Minecraft style Lampy and Rose together under moonlight and stars, romantic and cute`,

snow:
`Minecraft style Lampy and Rose holding hands in a snowy village, cozy winter atmosphere`,

sunset:
`Minecraft style Lampy and Rose watching sunset together near a lake, cinematic romance`

};

try{

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


// poll replicate

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
"prediction failed"
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
image]

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
"something exploded"
}`

);

}

}

};
