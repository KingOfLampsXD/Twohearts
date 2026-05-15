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
        'Upload 1 or more images with your prompt.'
      );
    }

    await message.channel.sendTyping();

    const imageUrls = attachments.map(
      file => file.url
    );

    message.reply(
      `🎨 Got ${imageUrls.length} image(s)\nPrompt: ${prompt}\n\nPreparing generation...`
    );

    // image API goes here later
  }
};
