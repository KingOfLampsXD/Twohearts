// commands/heartbeat.js

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "heartbeat",
  aliases: ["sync", "lovestatus"],

  async execute(message, args) {

    const user = message.mentions.users.first();

    // No mention
    if (!user) {
      return message.reply(
        "❌ Please mention someone.\nExample: `.heartbeat @user`"
      );
    }

    // Self check
    if (user.id === message.author.id) {
      return message.reply(
        "🫣 You can't check heartbeat with yourself."
      );
    }

    // Random percentage
    const percentage = Math.floor(Math.random() * 101);

    // Relationship status
    let status;

    if (percentage >= 90) {
      status = "💖 Soulmates";
    } else if (percentage >= 70) {
      status = "💕 Perfect Match";
    } else if (percentage >= 50) {
      status = "💞 Close Connection";
    } else if (percentage >= 30) {
      status = "✨ Growing Bond";
    } else {
      status = "💔 Weak Connection";
    }

    // Random heartbeat lines
    const heartbeatLines = [
      "Your hearts beat in perfect sync 💓",
      "There is a strong emotional connection ❤️",
      "The vibes between you both are adorable ✨",
      "Love energy detected 💞",
      "A beautiful bond is forming 🌸"
    ];

    const randomLine =
      heartbeatLines[
        Math.floor(Math.random() * heartbeatLines.length)
      ];

    // Embed
    const embed = new EmbedBuilder()
      .setColor("#FF69B4")
      .setTitle("💓 Heartbeat Sync")
      .setDescription(
        `${message.author} ❤️ ${user}`
      )
      .addFields(
        {
          name: "💗 Sync Level",
          value: `${percentage}%`,
          inline: true
        },
        {
          name: "🌸 Status",
          value: status,
          inline: true
        }
      )
      .setImage(
        "https://media.tenor.com/7q.gif"
      )
      .setFooter({
        text: randomLine
      })
      .setTimestamp();

    // Send Embed
    await message.reply({
      embeds: [embed]
    });
  }
};
