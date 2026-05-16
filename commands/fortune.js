const OpenAI = require('openai');

const openai = new OpenAI({
 apiKey: process.env.OPENROUTER_API_KEY,
 baseURL:'https://openrouter.ai/api/v1'
});

module.exports={

name:'fortune',

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

Create ONE playful fortune for Lampy and Rose.

Context:

Lampy and Rose are a long-distance married couple.

Rules:

- one sentence only
- cute
- cozy
- funny sometimes
- prediction style
- not serious astrology
- not cringe
- not explicit

Examples:

I see Minecraft chaos and at least one person pretending not to miss the other 😭

Warning: excessive affection levels may appear today 💀

Future detected: one of you is about to send a random soft message 😭

`

}

]

});

const fortune=
response
.choices[0]
.message.content
.replace(/(^["']|["']$)/g,'');

message.reply(
`🔮 Twohearts Fortune:\n${fortune}`
);

}catch(err){

console.log(err);

message.reply(
'😭 future machine broke'
);

}

}

};
