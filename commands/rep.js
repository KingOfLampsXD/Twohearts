// commands/rep.js

const { EmbedBuilder } = require('discord.js');

// Simple reputation storage
const reputation = new Map();

module.exports = {
  name: "rep",
  aliases: ["reputation"],

  async execute(message, args) {

    const user = message.mentions.users.first();

    // No mention
    if (!user) {
      return message.reply(
        "❌ Mention someone.\nExample: `.rep @user`"
      );
    }

    // Self rep check
    if (user.id === message.author.id) {
      return message.reply(
        "🫣 You can't give reputation to yourself."
      );
    }

    // Bot check
    if (user.bot) {
      return message.reply(
        "🤖 Bots don't need reputation."
      );
    }

    // Current reputation
    const currentRep =
      reputation.get(user.id) || 0;

    // Add rep
    reputation.set(user.id, currentRep + 1);

    // Total rep
    const totalRep =
      reputation.get(user.id);

    // Reputation rank
    let rank;

    if (totalRep >= 100) {
      rank = "👑 Legendary";
    } else if (totalRep >= 50) {
      rank = "💖 Loved";
    } else if (totalRep >= 25) {
      rank = "🌸 Trusted";
    } else if (totalRep >= 10) {
      rank = "✨ Friendly";
    } else {
      rank = "🌱 Beginner";
    }

    // Cute messages
    const messages = [
      "Kindness matters 💖",
      "Positive vibes detected 🌸",
      "Someone earned respect today ✨",
      "Rose appreciates kindness 🌹",
      "A good action was noticed 🫶"
    ];

    const randomMessage =
      messages[Math.floor(Math.random() * messages.length)];

    // Embed
    const embed = new EmbedBuilder()
      .setColor("#FF69B4")
      .setTitle("🏆 Reputation Given")
      .setDescription(
        `💖 ${message.author} gave reputation to ${user}`
      )
      .addFields(
        {
          name: "🌟 Total Reputation",
          value: `${totalRep}`,
          inline: true
        },
        {
          name: "🎀 Rank",
          value: rank,
          inline: true
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
