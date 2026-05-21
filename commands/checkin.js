// commands/checkin.js

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "checkin",
  aliases: ["howareyou", "moodcheck"],

  async execute(message, args) {

    const user =
      message.mentions.users.first() ||
      message.author;

    // Check-in messages
    const checkins = [

`🌸 Hey ${user}, how has your day been so far?`,

`💖 ${user}, did you eat and drink water today?`,

`🌙 ${user}, remember to rest if things feel overwhelming.`,

`☁️ ${user}, how are you feeling emotionally today?`,

`🫶 ${user}, you don't have to carry everything alone.`,

`🌹 ${user}, what's something good that happened today?`,

`✨ ${user}, Rose hopes your heart feels okay today.`,

`🧸 ${user}, have you been taking care of yourself properly?`,

`🌧️ ${user}, difficult days are temporary. You're doing okay.`,

`💫 ${user}, don't forget that your feelings matter too.`

    ];

    // Random check-in
    const randomCheckin =
      checkins[Math.floor(Math.random() * checkins.length)];

    // GIFs
    const gifs = [
      "https://media.tenor.com/cozy-anime.gif",
      "https://media.tenor.com/anime-hug.gif",
      "https://media.tenor.com/rain-anime.gif",
      "https://media.tenor.com/soft-anime.gif",
      "https://media.tenor.com/night-vibes.gif"
    ];

    const randomGif =
      gifs[Math.floor(Math.random() * gifs.length)];

    // Footer messages
    const footers = [
      "Rose cares about your wellbeing 🌸",
      "Take things slowly if needed 💖",
      "You're important too 🫶",
      "Small steps still matter ✨",
      "Hope tomorrow feels softer 🌙"
    ];

    const randomFooter =
      footers[Math.floor(Math.random() * footers.length)];

    // Embed
    const embed = new EmbedBuilder()
      .setColor("#FF69B4")
      .setTitle("🌸 Daily Check-In")
      .setDescription(randomCheckin)
      .setImage(randomGif)
      .setFooter({
        text: randomFooter
      })
      .setTimestamp();

    // Send
    await message.reply({
      embeds: [embed]
    });
  }
};
