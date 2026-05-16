const OpenAI = require('openai');

const openai = new OpenAI({
 apiKey: process.env.OPENROUTER_API_KEY,
 baseURL:'https://openrouter.ai/api/v1'
});

module.exports={

name:'scenario',

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

Create ONE tiny scenario for Lampy and Rose.

Context:

Lampy and Rose are a long-distance married couple.

Rules:

- one short scenario
- cute
- cozy
- funny sometimes
- works online
- not cringe roleplay
- not explicit
- feel like a real little moment

Examples:

Imagine Rose randomly joined VC and Lampy instantly stopped pretending to be serious 😭

Imagine both of you accidentally sent the same meme at the same time 💀

Imagine Minecraft date night instantly turning into chaos 😭

`

}

]

});

const scenario=
response
.choices[0]
.message.content
.replace(/(^["']|["']$)/g,'');

message.reply(
`🎬 Scenario:\n${scenario}`
);

}catch(err){

console.log(err);

message.reply(
'😭 Twohearts forgot the scenario'
);

}

}

};
