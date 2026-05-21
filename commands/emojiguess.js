// commands/emojiguess.js

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "emojiguess",
  aliases: ["guessemoji"],

  async execute(message, args) {

    // Emoji quiz list
    const questions = [

      {
        emoji: "🕷️🧑",
        answer: "spiderman"
      },

      {
        emoji: "🦇👨",
        answer: "batman"
      },

      {
        emoji: "🧊👸",
        answer: "elsa"
      },

      {
        emoji: "🦁👑",
        answer: "lion king"
      },

      {
        emoji: "🚢🧊",
        answer: "titanic"
      },

      {
        emoji: "🐼🥋",
        answer: "kung fu panda"
      },

      {
        emoji: "🚀🌕",
        answer: "moon landing"
      },

      {
        emoji: "🧙‍♂️⚡",
        answer: "harry potter"
      },

      {
        emoji: "🎮🟩⛏️",
        answer: "minecraft"
      },

      {
        emoji: "❄️☃️👭",
        answer: "frozen"
      }

    ];

    // Random question
    const randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];

    // Quiz Embed
    const quizEmbed = new EmbedBuilder()
      .setColor("#FF69B4")
      .setTitle("🧩 Emoji Guess Game")
      .setDescription(
        `Guess the word/movie/game from emojis:\n\n` +
        `✨ **${randomQuestion.emoji}**\n\n` +
        `⏳ You have 20 seconds!`
      )
      .setFooter({
        text: "Type your answer in chat 💖"
      })
      .setTimestamp();

    // Send game
    await message.channel.send({
      embeds: [quizEmbed]
    });

    // Filter
    const filter = msg =>
      msg.content.toLowerCase() ===
      randomQuestion.answer.toLowerCase();

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
          `🎉 ${msg.author} guessed correctly!\n\n` +
          `✨ Answer: **${randomQuestion.answer}**`
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
            `😭 Nobody guessed correctly.\n\n` +
            `✨ Correct Answer: **${randomQuestion.answer}**`
          )
          .setTimestamp();

        message.channel.send({
          embeds: [endEmbed]
        });
      }
    });
  }
};
