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

    const attachments =
      [...message.attachments.values()];

    if (attachments.length === 0) {
      return message.reply(
        '📸 Upload image(s) too!'
      );
    }

    await message.channel.sendTyping();

    const imageUrls =
      attachments.map(file => file.url);

    const loading =
      await message.reply(
`🎨 Twohearts is creating something...

🖼 Images: ${imageUrls.length}

✍ Prompt:
${prompt}

⏳ Generating...`
      );

    try {

      // placeholder for actual image service
      console.log(imageUrls);

      await new Promise(
        r => setTimeout(r, 8000)
      );

      await loading.edit(
`✨ Generation system ready

Prompt:
${prompt}

Images received:
${imageUrls.length}`
      );

    } catch(err){

      console.error(err);

      loading.edit(
        `❌ ${err.message}`
      );

    }

  }
};
