const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1'
});

module.exports = {
  name: 'image',

  async execute(message, args) {

    const prompt = args.join(' ');

    if (!prompt) {
      return message.reply(
        'Use: RL!image <prompt>'
      );
    }

    const attachments =
      [...message.attachments.values()];

    await message.channel.sendTyping();

    const loading =
      await message.reply(
        '🎨 Twohearts is generating...'
      );

    try {

      const content = [];

      content.push({
        type:'text',
        text:
`Create a beautiful image: ${prompt}`
      });

      for(const file of attachments){

        content.push({
          type:'image_url',
          image_url:{
            url:file.url
          }
        });

      }

      const response =
      await openai.chat.completions.create({

        model:'google/gemini-2.5-flash-image-preview',

        messages:[
          {
            role:'user',
            content
          }
        ]

      });

      console.log(
        JSON.stringify(response,null,2)
      );

      const image =
      response?.choices?.[0]
      ?.message?.images?.[0]
      ?.image_url?.url;

      if(!image){

        return loading.edit(
'❌ No image returned.\nCheck Railway logs.'
        );

      }

      await message.channel.send({

        content:
'💕 Made by Twohearts',

        files:[image]

      });

      loading.delete();

    } catch(err){

      console.error(err);

      loading.edit(
`❌ ${err.message}`
      );

    }

  }
};
