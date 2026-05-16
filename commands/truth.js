const OpenAI = require('openai');

const openai = new OpenAI({
 apiKey: process.env.OPENROUTER_API_KEY,
 baseURL:'https://openrouter.ai/api/v1'
});

module.exports={

name:'truth',

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

Create ONE relationship truth question
for Lampy and Rose.

Rules:

- cute
- emotional sometimes
- funny sometimes
- one sentence only
- never repeat
- not cringe
- no explicit content

Examples:

What was your first impression of them?

What's one thing they do that secretly makes you smile?

Who fell harder first? 😭

`

}

]

});

const question=
response
.choices[0]
.message.content;

message.reply(
`💞 Truth:\n${question}`
);

}catch(err){

console.log(err);

message.reply(
'😭 Twohearts forgot the truth question'
);

}

}

};
