const { EmbedBuilder } = require("discord.js");
const yt = require("yt-channel-info");

module.exports = {
  name:"youtube",
  aliases:["yt"],

  async execute(message){

    try{

      const lampy = await yt.getChannelInfo("imlampy-r5x");
      const rose = await yt.getChannelInfo("itzrosefx");

      const embed = new EmbedBuilder()

      .setColor("#ff4f9d")

      .setTitle("📺 Lampy ❤️ Rose Creator Hub")

      .setDescription(
      "Live creator stats 💞"
      )

      .addFields(

      {
        name:"🔥 I'm Lampy",
        value:
`👥 Subs: ${lampy.subscriberCount}
👀 Views: ${lampy.viewCount}
🎬 Videos: ${lampy.videoCount}`,
inline:true
      },

      {
        name:"🌸 RoseFX",
        value:
`👥 Subs: ${rose.subscriberCount}
👀 Views: ${rose.viewCount}
🎬 Videos: ${rose.videoCount}`,
inline:true
      }

      )

      .setFooter({
        text:"RL!youtube"
      });

      message.reply({
        embeds:[embed]
      });

    }catch(err){

      console.log(err);

      message.reply(
`😭 Error:
${err.message}`
      );

    }

  }
};
