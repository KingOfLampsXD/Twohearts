const axios = require("axios");

module.exports = {
  name: "image",

  async execute(message, args) {

    const prompt = args.join(" ");

    if (!prompt)
      return message.reply(
        "Use: RL!image <prompt>"
      );

    const msg = await message.reply(
      "🎨 Twohearts is drawing..."
    );

    try {

      const url =
`https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;

      const response =
      await axios.get(url,{
        responseType:"arraybuffer"
      });

      const buffer =
      Buffer.from(response.data);

      await message.channel.send({

        content:
`💕 Twohearts made this\nPrompt: ${prompt}`,

        files:[
          {
            attachment:buffer,
            name:"twohearts.png"
          }
        ]

      });

      msg.delete();

    } catch(err){

      console.log(err);

      msg.edit(
        "❌ Image generation failed"
      );

    }

  }
};
