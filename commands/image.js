const axios = require('axios');

module.exports = {
  name: 'image',

  async execute(message, args) {

    try {

      const prompt = args.join(' ');

      if (!prompt)
        return message.reply(
          'Use: RL!image <prompt>'
        );

      const msg =
      await message.reply(
        '🎨 Twohearts drawing...'
      );

      const url =
`https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1024&height=1024`;

      await message.channel.send({
        content:
`💕 ${prompt}`,
        files:[url]
      });

      await msg.delete();

    } catch(err){

      console.log(err);

      message.reply(
        '❌ image failed'
      );

    }

  }
};
