// commands/holdhand.js

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "holdhand",
  aliases: ["handhold"],

  async execute(message, args) {

    const user = message.mentions.users.first();

    // No mention
    if (!user) {
      return message.reply("❌ Please mention someone to hold hands with.");
    }

    // Bot check
    if (user.bot) {
      return message.reply("🤖 Bots can't hold hands.");
    }

    // Self check
    if (user.id === message.author.id) {
      return message.reply("🫣 You can't hold your own hand.");
    }

    // Cute GIFs
    const gifs = [
      "https://media.tenor.com/4x4.gif",
      "https://media.tenor.com/7wE.gif",
      "https://media.tenor.com/L5m.gif",
      "https://media.tenor.com/Ks9.gif",
      "https://media.tenor.com/q2f.gif"
    ];

    const randomGif =
      gifs[Math.floor(Math.random() * gifs.length)];

    // Embed
    const embed = new EmbedBuilder()
      .setColor("#FF69B4")
      .setTitle("🤝 Holding Hands")
      .setDescription(
        `💖 ${message.author} is holding hands with ${user}`
      )
      .setImage(randomGif)
      .setFooter({
        text: "Cute couple moment 💞"
      })
      .setTimestamp();

    // Send
    await message.reply({
      embeds: [embed]
    });
  }
};
