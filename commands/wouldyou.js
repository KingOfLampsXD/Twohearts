const OpenAI = require('openai');

const openai = new OpenAI({
 apiKey: process.env.OPENROUTER_API_KEY,
 baseURL:'https://openrouter.ai/api/v1'
});

module.exports={

name:'wouldyou',

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

Create ONE romantic couple
would-you-rather question
for Lampy and Rose.

Rules:

- cute
- funny
- cozy
- relationship themed
- one sentence only
- never repeat
- no weird roleplay
- no cringe
- no explicit content

Examples:

Would you rather cuddle all night or watch stars together?

Would you rather have a Minecraft date or movie night?

`

}

]

});

const question=

response
.choices[0]
.message.content;

message.reply(
`🌙 ${question}`
);

}catch{

message.reply(
'😭 Twohearts forgot the question'
);

}

}

};
