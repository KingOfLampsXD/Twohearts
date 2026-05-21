// commands/rep.js

const { EmbedBuilder } = require('discord.js');
const reputation = require('../models/reputation');

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

    // Reputation levels
    let title;

    const totalRep =
      reputation.get(user.id);

    if (totalRep >= 100) {
      title = "👑 Legendary Human";
    } else if (totalRep >= 50) {
      title = "💖 Loved By Everyone";
    } else if (totalRep >= 25) {
      title = "🌸 Trusted Person";
    } else if (totalRep >= 10) {
      title = "✨ Friendly Soul";
    } else {
      title = "🌱 New Reputation";
    }

    // Cute messages
    const messages = [
      "Kindness always shines 💖",
      "Good people deserve appreciation 🌸",
      "Positive vibes detected ✨",
      "Someone earned respect today 🫶",
      "Being kind makes a difference 🌹"
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
          name: "🎀 Reputation Title",
          value: title,
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
