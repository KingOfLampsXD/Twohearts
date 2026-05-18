// commands/divorce.js

const { EmbedBuilder } = require('discord.js');

// Same marriage storage
// Use same Map from marry.js
const marriages = new Map();

module.exports = {
  name: "divorce",
  aliases: ["breakup"],

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

    // Remove marriage
    marriages.delete(message.author.id);
    marriages.delete(partnerId);

    // Sad messages
    const sadMessages = [
      "Love faded away 😭",
      "Another heartbreak happened 💔",
      "The relationship could not survive 🌧️",
      "A sad ending for this couple 🥀",
      "Memories remain forever ✨"
    ];

    const randomMessage =
      sadMessages[Math.floor(Math.random() * sadMessages.length)];

    // Embed
    const embed = new EmbedBuilder()
      .setColor("#FF69B4")
      .setTitle("💔 Divorce")
      .setDescription(
        `${message.author} and ${partner} are no longer married.`
      )
      .setFooter({
        text: randomMessage
      })
      .setImage(
        "https://media.tenor.com/sad-anime.gif"
      )
      .setTimestamp();

    // Send
    await message.channel.send({
      embeds: [embed]
    });
  }
};
