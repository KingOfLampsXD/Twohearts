const axios = require('axios');

module.exports = {
  name: 'image',

  async execute(message, args) {

    const prompt = args.join(' ');

    if (!prompt) {
      return message.reply(
        '✨ Usage: RL!image <what you want>'
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
      attachments.map(
        file => file.url
      );

    const loading =
      await message.reply(
`🎨 Twohearts is creating something...

🖼 Images: ${imageUrls.length}

✍ Prompt:
${prompt}

⏳ Please wait...`
      );

    try {

      console.log(
        'Images:',
        imageUrls
      );

      // future image API spot

      await new Promise(
        r=>setTimeout(r,5000)
      );

      loading.edit(

`💕 Twohearts received everything

🖼 Images:
${imageUrls.length}

✍ Prompt:
${prompt}

✨ Ready for image generation`
      );

    }

    catch(err){

      console.error(err);

      loading.edit(
`❌ ${err.message}`
      );

    }

  }
};
