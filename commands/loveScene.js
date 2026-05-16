const axios=require("axios");

module.exports={

name:"lovescene",

async execute(message,args){

const scene=
args[0]?.toLowerCase() || "cherry";

const prompts={

cherry:
`Minecraft style romantic artwork of Lampy and Rose using their saved skins, sitting together under glowing cherry blossom trees at sunset, lanterns, heart particles, cozy atmosphere, cute couple energy, cinematic`,

night:
`Minecraft style Lampy and Rose on a moonlit hill with stars and lanterns, romantic and cozy`,

campfire:
`Minecraft style Lampy and Rose sitting together beside a warm campfire at night, cute romantic energy`,

snow:
`Minecraft style Lampy and Rose in a snowy village together holding hands, cozy winter atmosphere`,

sunset:
`Minecraft style Lampy and Rose watching sunset together near a lake, cinematic romantic atmosphere`

};

try{

await message.reply(
"okay okay 😭 making you two adorable again..."
);

const prompt=
prompts[scene] ||
prompts.cherry;


// OpenRouter image request

const response=
await axios.post(

"https://openrouter.ai/api/v1/chat/completions",

{

model:
"google/gemini-2.5-flash-image-preview",

messages:[

{

role:"user",

content:prompt

}

]

},

{

headers:{

Authorization:
`Bearer ${process.env.OPENROUTER_API_KEY}`,

"Content-Type":
"application/json"

}

}

);

const data=
response.data;

console.log(data);


// temporary fallback

return message.channel.send(
"😭 image generation connected — now check Railway logs"
);

}catch(err){

console.log(err.response?.data || err);

return message.reply(
"😭 scene machine exploded"
);

}

}

};
