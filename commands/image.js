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
`💕 Twohearts is working...

🖼 Images: ${imageUrls.length}

✍ Prompt:
${prompt}

⏳ Processing...`
      );

    try {

      console.log('Images:', imageUrls);

      await new Promise(
        r => setTimeout(r, 4000)
      );

      await loading.edit(
`✨ Received successfully!

🖼 Images:
${imageUrls.length}

✍ Prompt:
${prompt}

💖 Ready for image backend`
      );

    } catch(err){

      console.error(err);

      loading.edit(
        `❌ ${err.message}`
      );

    }

  }
};
