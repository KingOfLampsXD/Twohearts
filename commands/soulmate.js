const OpenAI = require('openai');

const openai = new OpenAI({
 apiKey: process.env.OPENROUTER_API_KEY,
 baseURL:'https://openrouter.ai/api/v1'
});

module.exports={

name:'soulmate',

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

You are Twohearts.

Create ONE deeply sweet message for Lampy and Rose.

Context:

Lampy and Rose are a long-distance married couple.

Rules:

- one message only
- emotional
- warm
- romantic
- feel personal
- no giant speeches
- no cringe poetry spam
- no explicit content
- make it feel like a best friend saying it

Examples:

Bro 😭 the way you two talk makes it obvious you're each other's safe place.

I swear you two somehow turned distance into extra love points 💞

Some people date. You two accidentally built a whole world 😭

`

}

]

});

const msg=
response
.choices[0]
.message.content
.replace(/(^["']|["']$)/g,'');

message.reply(
`💞 Soulmate Mode\n\n${msg}`
);

}catch(err){

console.log(err);

message.reply(
'😭 soulmate machine exploded'
);

}

}

};
