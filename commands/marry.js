// commands/marry.js

const { EmbedBuilder } = require('discord.js');

// Simple memory storage
// Resets when bot restarts
const marriages = new Map();

module.exports = {
  name: "marry",
  aliases: ["proposal"],

  async execute(message, args) {

    const user = message.mentions.users.first();

    // No mention
    if (!user) {
      return message.reply(
        "❌ Please mention someone to marry.\nExample: `.marry @user`"
      );
    }

    // Self check
    if (user.id === message.author.id) {
      return message.reply(
        "🫣 You can't marry yourself."
      );
    }

    // Bot check
    if (user.bot) {
      return message.reply(
        "🤖 You can't marry a bot."
      );
    }

    // Already married check
    if (
      marriages.has(message.author.id) ||
      marriages.has(user.id)
    ) {
      return message.reply(
        "💍 One of you is already married."
      );
    }

    // Proposal Embed
    const proposalEmbed = new EmbedBuilder()
      .setColor("#FF69B4")
      .setTitle("💍 Marriage Proposal")
      .setDescription(
        `${user}, ${message.author} wants to marry you!\n\n` +
        `Type \`yes\` to accept or \`no\` to reject.`
      )
      .setFooter({
        text: "Proposal expires in 30 seconds"
      })
      .setTimestamp();

    await message.channel.send({
      embeds: [proposalEmbed]
    });

    // Filter
    const filter = msg =>
      msg.author.id === user.id &&
      ["yes", "no"].includes(msg.content.toLowerCase());

    // Collector
    const collector = message.channel.createMessageCollector({
      filter,
      max: 1,
      time: 30000
    });

    collector.on("collect", async msg => {

      // Accepted
      if (msg.content.toLowerCase() === "yes") {

        marriages.set(message.author.id, user.id);
        marriages.set(user.id, message.author.id);

        const acceptEmbed = new EmbedBuilder()
          .setColor("#FF69B4")
          .setTitle("💖 Marriage Successful")
          .setDescription(
            `💍 ${message.author} and ${user} are now married!`
          )
          .setImage(
            "https://media.tenor.com/love-marriage.gif"
          )
          .setFooter({
            text: "Congratulations 🎉"
          })
          .setTimestamp();

        await message.channel.send({
          embeds: [acceptEmbed]
        });

      } else {

        // Rejected
        const rejectEmbed = new EmbedBuilder()
          .setColor("#FF69B4")
          .setTitle("💔 Proposal Rejected")
          .setDescription(
            `${user} rejected ${message.author}'s proposal 😭`
          )
          .setTimestamp();

        await message.channel.send({
          embeds: [rejectEmbed]
        });
      }
    });

    // Timeout
    collector.on("end", collected => {

      if (collected.size === 0) {

        const timeoutEmbed = new EmbedBuilder()
          .setColor("#FF69B4")
          .setTitle("⌛ Proposal Expired")
          .setDescription(
            `${user} did not respond in time.`
          )
          .setTimestamp();

        message.channel.send({
          embeds: [timeoutEmbed]
        });
      }
    });
  }
};
