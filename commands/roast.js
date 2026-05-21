// commands/roast.js

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "roast",
  aliases: ["insult"],

  async execute(message, args) {

    const user = message.mentions.users.first();

    // No mention
    if (!user) {
      return message.reply(
        "❌ Mention someone to roast.\nExample: `.roast @user`"
      );
    }

    // Self roast
    if (user.id === message.author.id) {
      return message.reply(
        "😭 Roasting yourself is crazy."
      );
    }

    // Roast lines
    const roasts = [

      "💀 Your brain has more lag than a Minecraft server.",

      "😭 You bring everyone so much joy... when you leave the VC.",

      "🫠 Even autocorrect gave up trying to understand you.",

      "💤 Your personality is like 1% battery mode.",

      "🤡 You're proof that WiFi signals can affect intelligence.",

      "💀 If laziness was a competition, you'd come second because you're too lazy to win.",

      "😭 Your secrets are always safe because nobody listens to you anyway.",

      "🫣 You type like your keyboard is fighting for survival.",

      "💤 You have something on your chin... no, the third one.",

      "🤡 Even Discord muted you emotionally.",

      "💀 Your jokes are so dry the Sahara asked for water.",

      "😭 Bro got rejected by AI too.",

      "🫠 You look like you say 'gg ez' after losing.",

      "🤡 Your fashion sense is sponsored by lag.",

      "💀 Even NPCs have more personality."
    ];

    // Random roast
    const randomRoast =
      roasts[Math.floor(Math.random() * roasts.length)];

    // GIFs
    const gifs = [
      "https://media.tenor.com/laugh.gif",
      "https://media.tenor.com/anime-laugh.gif",
      "https://media.tenor.com/funny.gif",
      "https://media.tenor.com/roast.gif",
      "https://media.tenor.com/lmao.gif"
    ];

    const randomGif =
      gifs[Math.floor(Math.random() * gifs.length)];

    // Embed
    const embed = new EmbedBuilder()
      .setColor("#FF69B4")
      .setTitle("🔥 Roast Machine")
      .setDescription(
        `💀 ${user}\n\n${randomRoast}`
      )
      .setImage(randomGif)
      .setFooter({
        text: "Rose chose violence today 😭"
      })
      .setTimestamp();

    // Send
    await message.reply({
      embeds: [embed]
    });
  }
};
