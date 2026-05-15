const axios = require('axios');

module.exports = {
  name: 'image',

  async execute(message, args) {

    try {

      const prompt = args.join(' ');

      const attachments =
      [...message.attachments.values()];

      if (attachments.length < 2) {
        return message.reply(
          '📸 Upload Lampy + Rose skins too'
        );
      }

      const skin1 = attachments[0].url;
      const skin2 = attachments[1].url;

      await message.channel.sendTyping();

      const loading =
      await message.reply(
        '🎨 Twohearts is preparing Lampy + Rose...'
      );

      console.log('Skin 1:', skin1);
      console.log('Skin 2:', skin2);
      console.log('Prompt:', prompt);

      // future image backend call goes here

      await loading.edit(
`💕 Ready

Skin 1:
${skin1}

Skin 2:
${skin2}

Prompt:
${prompt}`
      );

    } catch(err){

      console.log(err);

      message.reply(
        '❌ image failed'
      );

    }

  }
};
