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

Create ONE fun couple guessing game for Lampy and Rose.

Context:

Lampy and Rose are a long-distance married couple.

Rules:

- ask ONE guessing challenge
- make one person guess something about the other
- cute
- funny sometimes
- realistic
- one sentence only
- not cringe
- no explicit content

Examples:

Rose, guess Lampy's comfort food 😭

Lampy, guess Rose's dream Minecraft date.

Rose, guess what Lampy would buy with unlimited robux 💀

Lampy, guess Rose's emergency comfort activity.

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
