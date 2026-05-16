const OpenAI = require('openai');

const openai = new OpenAI({
 apiKey: process.env.OPENROUTER_API_KEY,
 baseURL:'https://openrouter.ai/api/v1'
});

module.exports={

name:'guess',

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

Create ONE guessing game for Lampy and Rose.

Context:

Lampy and Rose are a long-distance married couple.

Rules:

- ONE sentence only
- make it about Discord, Minecraft, Roblox, calls, memes, habits, late-night chats
- NEVER invent fake memories
- NEVER invent trips or events
- NEVER make random stories
- cute and funny
- realistic

Examples:

Lampy, guess Rose's most-used cute word 😭

Rose, guess what game Lampy would instantly say yes to.

Lampy, guess who gets clingier late at night 💀

Rose, guess Lampy's emergency comfort activity 😭

`

}

]

});

const guess=
response
.choices[0]
.message.content
.replace(/(^["']|["']$)/g,'');

message.reply(
`🧠 Guess Time:\n${guess}`
);

}catch(err){

console.log(err);

message.reply(
'😭 Twohearts forgot the game'
);

}

}

};
