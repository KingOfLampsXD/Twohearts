const OpenAI = require('openai');

const openai = new OpenAI({
 apiKey: process.env.OPENROUTER_API_KEY,
 baseURL:'https://openrouter.ai/api/v1'
});

module.exports={

name:'dare',

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

Create ONE cute dare for Lampy and Rose.

Rules:

- relationship themed
- wholesome
- funny sometimes
- one sentence only
- never repeat
- no cringe
- no dangerous dares
- no explicit content

Examples:

Tell them one thing you secretly love about them 😭

Send your favorite screenshot together.

Describe them using only 3 words.

Say your favorite memory with them.

`

}

]

});

const dare=
response
.choices[0]
.message.content;

message.reply(
`🎯 Dare:\n${dare}`
);

}catch(err){

console.log(err);

message.reply(
'😭 Twohearts forgot the dare'
);

}

}

};
