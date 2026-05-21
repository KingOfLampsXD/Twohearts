// commands/guessnumber.js

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "guessnumber",
  aliases: ["numbergame"],

  async execute(message, args) {

    // Random number
    const number =
      Math.floor(Math.random() * 20) + 1;

    // Start Embed
    const startEmbed = new EmbedBuilder()
      .setColor("#FF69B4")
      .setTitle("🎲 Guess The Number")
      .setDescription(
        `I'm thinking of a number between **1 - 20** 👀\n\n` +
        `⏳ You have 20 seconds to guess it!`
      )
      .setFooter({
        text: "Type your guess in chat 💖"
      })
      .setTimestamp();

    // Send game
    await message.channel.send({
      embeds: [startEmbed]
    });

    // Filter
    const filter = msg =>
      !isNaN(msg.content);

    // Collector
    const collector =
      message.channel.createMessageCollector({
        filter,
        time: 20000
      });

    // Guess handler
    collector.on("collect", async msg => {

      const guess = Number(msg.content);

      // Correct answer
      if (guess === number) {

        collector.stop("won");

        const winEmbed = new EmbedBuilder()
          .setColor("#FF69B4")
          .setTitle("🏆 Correct Guess")
          .setDescription(
            `🎉 ${msg.author} guessed the correct number!\n\n` +
            `✨ Number was: **${number}**`
          )
          .setFooter({
            text: "Lucky guess 👀"
          })
          .setTimestamp();

        return message.channel.send({
          embeds: [winEmbed]
        });
      }

      // Hint
      if (guess > number) {

        message.channel.send(
          `📉 ${msg.author} Too high!`
        );

      } else {

        message.channel.send(
          `📈 ${msg.author} Too low!`
        );
      }
    });

    // End
    collector.on("end", (collected, reason) => {

      if (reason !== "won") {

        const endEmbed = new EmbedBuilder()
          .setColor("#FF69B4")
          .setTitle("⌛ Game Over")
          .setDescription(
            `😭 Nobody guessed the number.\n\n` +
            `✨ Correct Number: **${number}**`
          )
          .setTimestamp();

        message.channel.send({
          embeds: [endEmbed]
        });
      }
    });
  }
};
