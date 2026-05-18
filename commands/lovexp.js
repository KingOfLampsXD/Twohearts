// commands/lovexp.js

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "lovexp",
  aliases: ["lovelevel", "bond"],

  async execute(message, args) {

    const user = message.mentions.users.first();

    // No mention
    if (!user) {
      return message.reply(
        "❌ Please mention someone.\nExample: `.lovexp @user`"
      );
    }

    // Self check
    if (user.id === message.author.id) {
      return message.reply(
        "🫣 You can't check love XP with yourself."
      );
    }

    // Random XP System
    const xp = Math.floor(Math.random() * 5000) + 1;

    // Calculate Level
    const level = Math.floor(xp / 500);

    // Progress Bar
    const progress = Math.floor((xp % 500) / 50);

    let bar = "";

    for (let i = 0; i < 10; i++) {
      if (i < progress) {
        bar += "💖";
      } else {
        bar += "🖤";
      }
    }

    // Relationship Rank
    let rank;

    if (level >= 8) {
      rank = "💍 Soulmates";
    } else if (level >= 5) {
      rank = "💕 Lovers";
    } else if (level >= 3) {
      rank = "💞 Besties";
    } else if (level >= 1) {
      rank = "✨ Close Friends";
    } else {
      rank = "🌱 New Connection";
    }

    // Cute Messages
    const messages = [
      "Your bond is getting stronger 💓",
      "Love energy detected ❤️",
      "A beautiful connection is growing 🌸",
      "Your hearts are syncing ✨",
      "This relationship feels magical 💞"
    ];

    const randomMessage =
      messages[Math.floor(Math.random() * messages.length)];

    // Embed
    const embed = new EmbedBuilder()
      .setColor("#FF69B4")
      .setTitle("💖 Love XP System")
      .setDescription(
        `${message.author} ❤️ ${user}`
      )
      .addFields(
        {
          name: "💘 Love XP",
          value: `${xp} XP`,
          inline: true
        },
        {
          name: "🌸 Love Level",
          value: `${level}`,
          inline: true
        },
        {
          name: "💍 Relationship Rank",
          value: rank,
          inline: false
        },
        {
          name: "📈 Progress",
          value: bar,
          inline: false
        }
      )
      .setFooter({
        text: randomMessage
      })
      .setTimestamp();

    // Send
    await message.reply({
      embeds: [embed]
    });
  }
};
