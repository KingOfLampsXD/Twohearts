const axios = require('axios');

module.exports = {
  name: 'image',

  async execute(message, args) {

    try {

      const prompt = args.join(' ');

      if (!prompt) {
        return message.reply(
          '✨ Use: RL!image <prompt>'
        );
      }

      await message.channel.sendTyping();

      const loading =
      await message.reply(
        '🎨 Twohearts is drawing...'
      );

      const imageURL =
`https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;

      const response =
      await axios.get(
        imageURL,
        {
          responseType:'arraybuffer',
          timeout:30000
        }
      );

      const buffer =
      Buffer.from(response.data);

      await message.channel.send({

        content:
`💕 Prompt: ${prompt}`,

        files:[
          {
            attachment:buffer,
            name:'twohearts.png'
          }
        ]

      });

      await loading.delete();

    }

    catch(err){

      console.log(
        'IMAGE ERROR:',
        err
      );

      message.reply(
        '❌ Image failed'
      );

    }

  }
};
