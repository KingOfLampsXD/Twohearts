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

You create dares for Lampy and Rose.

Context:

Lampy and Rose are a long-distance married couple.

These dares MUST work through:

- Discord
- texting
- calls
- screenshots
- selfies
- voice messages
- Minecraft
- Roblox
- messages

Rules:

- generate ONE dare only
- give an ACTION not a question
- NEVER ask truth questions
- NEVER start with "what" or "describe"
- one sentence only
- romantic sometimes
- funny sometimes
- cute
- realistic
- no cringe roleplay
- no dangerous dares
- no explicit sexual content
- no repeating examples exactly

Examples:

Send 3 compliments right now 😭

Use the cheesiest nickname possible for 10 minutes.

Send your favorite screenshot together.

Send a random heart and refuse to explain.

Spam one wholesome message using only emojis.

Send a voice note with fake dramatic energy.

Pretend to be extra offended for absolutely no reason 😭

Text one thing you secretly appreciate.

`

}

]

});

const dare=
response
.choices[0]
.message.content
.replace(/(^["']|["']$)/g,'');

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
