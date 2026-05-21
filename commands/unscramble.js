// commands/unscramble.js

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "unscramble",
  aliases: ["scramble"],

  async execute(message, args) {

    // Word list
    const words = [
      "minecraft",
      "discord",
      "rose",
      "lampy",
      "butterfly",
      "romantic",
      "strawberry",
      "moonlight",
      "gaming",
      "beautiful",
      "galaxy",
      "sunflower",
      "aesthetic",
      "comfort",
      "dream"
    ];

    // Random word
    const word =
      words[Math.floor(Math.random() * words.length)];

    // Scramble word
    const scrambled =
      word
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    // Quiz Embed
    const quizEmbed = new EmbedBuilder()
      .setColor("#FF69B4")
      .setTitle("🧩 Unscramble Game")
      .setDescription(
        `Unscramble this word:\n\n` +
        `✨ **${scrambled}**\n\n` +
        `⏳ You have 20 seconds!`
      )
      .setFooter({
        text: "First correct answer wins 💖"
      })
      .setTimestamp();

    // Send game
    await message.channel.send({
      embeds: [quizEmbed]
    });

    // Filter
    const filter = msg =>
      msg.content.toLowerCase() === word.toLowerCase();

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
          `🎉 ${msg.author} guessed the word correctly!\n\n` +
          `✨ Word: **${word}**`
        )
        .setFooter({
          text: "Big brain detected 🧠"
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
            `😭 Nobody guessed the word.\n\n` +
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
