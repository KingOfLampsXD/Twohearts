// commands/mathquiz.js

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "mathquiz",
  aliases: ["mathgame"],

  async execute(message, args) {

    // Random numbers
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;

    // Random operator
    const operators = ["+", "-", "*"];

    const operator =
      operators[Math.floor(Math.random() * operators.length)];

    // Calculate answer
    let answer;

    switch (operator) {

      case "+":
        answer = num1 + num2;
        break;

      case "-":
        answer = num1 - num2;
        break;

      case "*":
        answer = num1 * num2;
        break;
    }

    // Quiz Embed
    const quizEmbed = new EmbedBuilder()
      .setColor("#FF69B4")
      .setTitle("🧠 Math Quiz")
      .setDescription(
        `Solve this question:\n\n` +
        `✨ **${num1} ${operator} ${num2} = ?**\n\n` +
        `⏳ You have 15 seconds!`
      )
      .setFooter({
        text: "First correct answer wins 💖"
      })
      .setTimestamp();

    // Send quiz
    await message.channel.send({
      embeds: [quizEmbed]
    });

    // Filter
    const filter = msg =>
      msg.content == answer;

    // Collector
    const collector =
      message.channel.createMessageCollector({
        filter,
        max: 1,
        time: 15000
      });

    // Correct answer
    collector.on("collect", async msg => {

      const winEmbed = new EmbedBuilder()
        .setColor("#FF69B4")
        .setTitle("🏆 Correct Answer")
        .setDescription(
          `🎉 ${msg.author} answered correctly!\n\n` +
          `✨ Answer: **${answer}**`
        )
        .setFooter({
          text: "Smart human detected 🧠"
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
            `✨ Correct Answer: **${answer}**`
          )
          .setTimestamp();

        message.channel.send({
          embeds: [endEmbed]
        });
      }
    });
  }
};
