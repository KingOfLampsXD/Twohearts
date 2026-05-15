const axios = require("axios");

module.exports = {
  name: "image",

  async execute(message, args) {

    const prompt = args.join(" ");

    if (!prompt)
      return message.reply(
        "Use: RL!image <prompt>"
      );

    const attachments =
      [...message.attachments.values()];

    if(attachments.length < 2){
      return message.reply(
        "📸 Upload both skins too!"
      );
    }

    await message.channel.sendTyping();

    const skin1 =
      attachments[0].url;

    const skin2 =
      attachments[1].url;

    const msg =
      await message.reply(
        "🎨 Twohearts is drawing Lampy + Rose..."
      );

    try {

      const megaPrompt = encodeURIComponent(

`Use these two Minecraft skins as references:

Skin 1:
${skin1}

Skin 2:
${skin2}

VERY IMPORTANT:

Keep the exact characters.

Do not create random Steve characters.

${prompt}

Minecraft style.
Cute couple wallpaper.
Sunset lighting.
High detail.`

      );

      const url =
`https://image.pollinations.ai/prompt/${megaPrompt}`;

      const response =
      await axios.get(url,{
        responseType:"arraybuffer"
      });

      const buffer =
      Buffer.from(response.data);

      await message.channel.send({

        content:
"💕 Lampy + Rose wallpaper",

        files:[
          {
            attachment:buffer,
            name:"twohearts.png"
          }
        ]

      });

      msg.delete();

    }

    catch(err){

      console.log(err);

      msg.edit(
        "❌ generation failed"
      );

    }

  }
};
