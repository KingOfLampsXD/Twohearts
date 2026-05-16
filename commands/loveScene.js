const axios=require("axios");

module.exports={

name:"lovescene",

async execute(message,args){

const scene=
args[0]?.toLowerCase() || "cherry";

try{

await message.reply(
"okay okay 😭 making you two adorable again..."
);

const response=
await axios.post(

"https://openrouter.ai/api/v1/chat/completions",

{

model:"openai/gpt-oss-20b:free",

messages:[

{
role:"user",
content:
`say hi from Twohearts`
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

console.log(
response.data
);

return message.reply(
"😭 API WORKS CHECK RAILWAY LOGS"
);

}catch(err){

console.log(
err.response?.data || err
);

return message.reply(
`😭 ${err.message}`
);

}

}

};
