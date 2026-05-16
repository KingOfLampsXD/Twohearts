const OpenAI = require('openai');

const openai = new OpenAI({
 apiKey: process.env.OPENROUTER_API_KEY,
 baseURL:'https://openrouter.ai/api/v1'
});

module.exports={

name:'night',

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

You create ONE late-night prompt for Lampy and Rose.

Context:

Lampy and Rose are a long-distance married couple.

Night mode should feel:

- cozy
- soft
- cute
- thoughtful
- late-night Discord energy

Rules:

- one sentence only
- can be a challenge or question
- romantic sometimes
- funny sometimes
- not overly dramatic
- no explicit content
- no therapy speeches
- never repeat

Examples:

What's one tiny thing they did recently that made you smile? 😭

Send a random goodnight message in the weirdest way possible.

What's your favorite late-night memory together?

Pretend tonight is your first meeting and say hi 😭

`

}

]

});

const prompt=
response
.choices[0]
.message.content
.replace(/(^["']|["']$)/g,'');

message.reply(
`🌙 Night Mode:\n${prompt}`
);

}catch(err){

console.log(err);

message.reply(
'😭 Night mode fell asleep'
);

}

}

};
