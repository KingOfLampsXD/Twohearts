// commands/lovetest.js

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "lovetest",
  aliases: ["ship", "compatibility"],

  async execute(message, args) {

    const user = message.mentions.users.first();

    // No mention
    if (!user) {
      return message.reply(
        "❌ Please mention someone.\nExample: `.lovetest @user`"
      );
    }

    // Self check
    if (user.id === message.author.id) {
      return message.reply(
        "🫣 You can't love test yourself."
      );
    }

    // Random love percentage
    const percentage = Math.floor(Math.random() * 101);

    // Relationship Result
    let result;
    let emoji;

    if (percentage >= 90) {
      result = "Soulmates";
      emoji = "💍";
    } else if (percentage >= 75) {
      result = "Perfect Couple";
      emoji = "💖";
    } else if (percentage >= 50) {
      result = "Cute Match";
      emoji = "💕";
    } else if (percentage >= 30) {
      result = "Friend Zone";
      emoji = "😅";
    } else {
      result = "Broken Connection";
      emoji = "💔";
    }

    // Cute random lines
    const lines = [
      "Love is in the air 💞",
      "Your hearts are syncing ❤️",
      "A romantic connection detected 🌸",
      "This duo looks adorable ✨",
      "The chemistry is interesting 👀"
    ];

    const randomLine =
      lines[Math.floor(Math.random() * lines.length)];

    // Progress Bar
    const filled = Math.floor(percentage / 10);

    let bar = "";

    for (let i = 0; i < 10; i++) {
      if (i < filled) {
        bar += "💖";
      } else {
        bar += "🖤";
      }
    }

    // Embed
    const embed = new EmbedBuilder()
      .setColor("#FF69B4")
      .setTitle("💘 Love Test")
      .setDescription(
        `${message.author} ❤️ ${user}`
      )
      .addFields(
        {
          name: "💞 Compatibility",
          value: `${percentage}%`,
          inline: true
        },
        {
          name: "🌸 Result",
          value: `${emoji} ${result}`,
          inline: true
        },
        {
          name: "📈 Love Meter",
          value: bar,
          inline: false
        }
      )
      .setImage(
        "https://media.tenor.com/0AVbKGY_MxMAAAAC/love-anime.gif"
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
