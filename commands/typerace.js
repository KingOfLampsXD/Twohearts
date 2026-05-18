// commands/typerace.js

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "typerace",
  aliases: ["fasttype"],

  async execute(message, args) {

    // Random typing sentences
    const sentences = [
      "I love Discord bots",
      "Typing races are fun",
      "Minecraft is amazing",
      "Love and chaos everywhere",
      "Pink aesthetic forever",
      "Fast fingers win games",
      "Discord couples are cute",
      "Anime vibes only",
      "Stay happy and smile",
      "Coding bots is interesting"
    ];

    // Pick random sentence
    const sentence =
      sentences[Math.floor(Math.random() * sentences.length)];

    // Start Embed
    const startEmbed = new EmbedBuilder()
      .setColor("#FF69B4")
      .setTitle("⌨️ Typing Race")
      .setDescription(
        `Type this sentence exactly:\n\n` +
        `📝 **${sentence}**\n\n` +
        `⏳ You have 15 seconds!`
      )
      .setFooter({
        text: "First person to type correctly wins!"
      })
      .setTimestamp();

    // Send race message
    await message.channel.send({
      embeds: [startEmbed]
    });

    // Filter
    const filter = msg =>
      msg.content.toLowerCase() === sentence.toLowerCase();

    // Message Collector
    const collector = message.channel.createMessageCollector({
      filter,
      max: 1,
      time: 15000
    });

    // Winner
    collector.on("collect", async msg => {

      const winEmbed = new EmbedBuilder()
        .setColor("#FF69B4")
        .setTitle("🏆 Typing Race Winner")
        .setDescription(
          `🎉 ${msg.author} typed the sentence first!\n\n` +
          `💖 Sentence:\n${sentence}`
        )
        .setFooter({
          text: "Fast typing skills 😎"
        })
        .setTimestamp();

      await message.channel.send({
        embeds: [winEmbed]
      });
    });

    // End
    collector.on("end", collected => {

      if (collected.size === 0) {

        const endEmbed = new EmbedBuilder()
          .setColor("#FF69B4")
          .setTitle("⌛ Typing Race Ended")
          .setDescription(
            `Nobody typed the sentence in time 😭\n\n` +
            `📝 Sentence was:\n${sentence}`
          )
          .setTimestamp();

        message.channel.send({
          embeds: [endEmbed]
        });
      }
    });
  }
};
