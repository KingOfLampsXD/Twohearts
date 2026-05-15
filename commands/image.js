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
        'Usage: RL!image <prompt>'
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

      const content = [
        {
          type: "text",
          text:
`Create an image: ${prompt}`
        }
      ];

      // add uploaded images
      for (const file of attachments) {
        content.push({
          type: "image_url",
          image_url: {
            url: file.url
          }
        });
      }

      const response =
      await openai.chat.completions.create({

        model:
        "google/gemini-2.5-flash-image",

        modalities: ["image","text"],

        messages: [
          {
            role: "user",
            content
          }
        ]

      });

      const image =
      response.choices?.[0]
      ?.message?.images?.[0];

      if (!image) {
        return loading.edit(
          '❌ No image returned'
        );
      }

      await message.channel.send({
        content:
        '💕 Made by Twohearts',
        files: [
          image.image_url.url
        ]
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
