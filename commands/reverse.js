// commands/reverse.js

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "reverse",
  aliases: ["reversetype"],

  async execute(message, args) {

    // Word list
    const words = [
      "rose",
      "lampy",
      "minecraft",
      "discord",
      "butterfly",
      "romantic",
      "galaxy",
      "strawberry",
      "moonlight",
      "beautiful",
      "comfort",
      "sunflower",
      "gaming",
      "dream",
      "aesthetic"
    ];

    // Random word
    const word =
      words[Math.floor(Math.random() * words.length)];

    // Reverse word
    const reversed =
      word.split("").reverse().join("");

    // Game Embed
    const gameEmbed = new EmbedBuilder()
      .setColor("#FF69B4")
      .setTitle("🔄 Reverse Typing Game")
      .setDescription(
        `Type the correct word from this reversed text:\n\n` +
        `✨ **${reversed}**\n\n` +
        `⏳ You have 20 seconds!`
      )
      .setFooter({
        text: "First correct answer wins 💖"
      })
      .setTimestamp();

    // Send game
    await message.channel.send({
      embeds: [gameEmbed]
    });

    // Filter
    const filter = msg =>
      msg.content.toLowerCase() ===
      word.toLowerCase();

    // Collector
    const collector =
      message.channel.createMessageCollector({
        filter,
        max: 1,
        time: 20000
      });

    // Winner
    collector.on("collect", async msg => {

      const winEmbed = new EmbedBuilder()
        .setColor("#FF69B4")
        .setTitle("🏆 Correct Answer")
        .setDescription(
          `🎉 ${msg.author} typed the correct word!\n\n` +
          `✨ Word: **${word}**`
        )
        .setFooter({
          text: "Fast fingers detected ⚡"
        })
        .setTimestamp();

      await message.channel.send({
        embeds: [winEmbed]
      });
    });

    // Timeout
    collector.on("end", collected => {

      if (collected.size === 0) {

        const endEmbed = new EmbedBuilder()
          .setColor("#FF69B4")
          .setTitle("⌛ Time's Up")
          .setDescription(
            `😭 Nobody answered correctly.\n\n` +
            `✨ Correct Word: **${word}**`
          )
          .setTimestamp();

        message.channel.send({
          embeds: [endEmbed]
        });
      }
    });
  }
};
