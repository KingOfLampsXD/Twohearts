const axios = require('axios');

module.exports = {
  name: 'image',

  async execute(message,args){

    try{

      const attachments=
      [...message.attachments.values()];

      const userPrompt=
      args.join(" ");

      if(attachments.length<2){

        return message.reply(
        "📸 Upload BOTH Lampy + Rose skins"
        );

      }

      const loading=
      await message.reply(
      "🎨 Twohearts making Lampy + Rose..."
      );

      const megaPrompt=
encodeURIComponent(`

EXACTLY TWO minecraft characters.

NO random Steve.
NO extra people.
NO different outfits.

Boy:
white hair
grey hoodie
dark aesthetic

Girl:
long blonde hair
pink outfit
flower accessory

Cute romantic couple

Holding hands

Minecraft sunset wallpaper

Shaders

Cinematic lighting

${userPrompt}

`);

      const url=
`https://image.pollinations.ai/prompt/${megaPrompt}`;

      const response=
      await axios.get(
      url,
      {
      responseType:'arraybuffer'
      });

      const buffer=
      Buffer.from(response.data);

      await message.channel.send({

      content:
      "💕 Lampy + Rose",

      files:[
      {
      attachment:buffer,
      name:"twohearts.png"
      }
      ]

      });

      loading.delete();

    }catch(err){

      console.log(err);

      message.reply(
      "❌ generation failed"
      );

    }

  }
};
