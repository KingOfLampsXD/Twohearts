// commands/partner.js

const { EmbedBuilder } = require('discord.js');

// Same marriage storage
// Use same Map from marry.js
const marriages = new Map();

module.exports = {
  name: "partner",
  aliases: ["spouse", "marriage"],

  async execute(message, args) {

    // Check marriage
    const partnerId = marriages.get(message.author.id);

    if (!partnerId) {
      return message.reply(
        "💔 You are not married to anyone."
      );
    }

    // Fetch partner
    const partner = await message.client.users.fetch(partnerId);

    // Cute status lines
    const lines = [
      "Love is beautiful 💖",
      "A lovely couple 🌸",
      "Together forever ✨",
      "Relationship goals 💞",
      "True love detected 💍"
    ];

    const randomLine =
      lines[Math.floor(Math.random() * lines.length)];

    // Embed
    const embed = new EmbedBuilder()
      .setColor("#FF69B4")
      .setTitle("💍 Partner Info")
      .setDescription(
        `❤️ **Partner:** ${partner}\n\n` +
        `💖 Married to: ${message.author}`
      )
      .setThumbnail(
        partner.displayAvatarURL({ dynamic: true })
      )
      .setFooter({
        text: randomLine
      })
      .setTimestamp();

    // Send
    await message.reply({
      embeds: [embed]
    });
  }
};
