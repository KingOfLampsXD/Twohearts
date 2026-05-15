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

    if (attachments.length === 0) {
      return message.reply(
        'Upload image(s) too!'
      );
    }

    await message.channel.sendTyping();

    const imageUrls =
      attachments.map(
        file => file.url
      );

    message.reply(
`🎨 Starting image edit...

🖼 Images: ${imageUrls.length}

✍ Prompt:
${prompt}

⏳ Please wait...`
    );

    // image AI code goes here later

  }
};
