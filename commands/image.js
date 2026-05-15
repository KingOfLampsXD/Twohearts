const axios = require('axios');

module.exports = {
  name: 'image',

  async execute(message, args) {

    const prompt = args.join(' ');

    if (!prompt) {
      return message.reply(
        '✨ Usage: RL!image <prompt>'
      );
    }

    await message.channel.sendTyping();

    const loading =
      await message.reply(
        '🎨 Twohearts is creating your image...'
      );

    try {

      const encodedPrompt =
      encodeURIComponent(prompt);

      const imageUrl =
`https://image.pollinations.ai/prompt/${encodedPrompt}`;

      await message.channel.send({

        content:
`💕 Made by Twohearts\nPrompt: ${prompt}`,

        files:[
          imageUrl
        ]

      });

      loading.delete();

    }

    catch(err){

      console.error(err);

      loading.edit(
`❌ ${err.message}`
      );

    }

  }
};
