const OpenAI = require('openai');

const openai = new OpenAI({
 apiKey: process.env.OPENROUTER_API_KEY,
 baseURL:'https://openrouter.ai/api/v1'
});

module.exports={

name:'date',

async execute(message){

try{

await message.channel.sendTyping();

const response=
await openai.chat.completions.create({

model:
'openai/gpt-oss-20b:free',

messages:[

{

role:'system',

content:`

Create ONE date idea for Lampy and Rose.

Context:

Lampy and Rose are a long-distance married couple.

Date ideas should work through:

- Discord
- Minecraft
- Roblox
- calls
- texting
- watching stuff together

Rules:

- one sentence only
- cute
- cozy
- realistic
- funny sometimes
- no cringe roleplay
- no explicit content

Examples:

Watch a random Minecraft video together and both rate it 😭

Join Minecraft and build each other surprise houses.

Send each other a meme every minute for 5 minutes.

Call and only communicate through emojis for 2 minutes 💀

`

}

]

});

const date=
response
.choices[0]
.message.content
.replace(/(^["']|["']$)/g,'');

message.reply(
`🌙 Date Idea:\n${date}`
);

}catch(err){

console.log(err);

message.reply(
'😭 Twohearts forgot date night'
);

}

}

};
