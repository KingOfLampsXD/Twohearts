// commands/dream.js

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "dream",
  aliases: ["dreamscene", "sleepdream"],

  async execute(message, args) {

    const user =
      message.mentions.users.first() ||
      message.author;

    // Dream scenarios
    const dreams = [

`🌙 You and ${user} were sitting on a rooftop together watching stars quietly ✨`,

`🌸 You and ${user} got lost in a beautiful pink flower garden 💖`,

`☁️ You and ${user} were flying through soft clouds while laughing together.`,

`🌧️ It was raining softly while you and ${user} shared headphones under one umbrella 🎵`,

`🫶 You and ${user} fell asleep together during a late night movie marathon.`,

`🌃 You and ${user} explored a glowing cyberpunk city at midnight.`,

`🎠 You and ${user} spent the whole night at an empty carnival together ✨`,

`🌙 You and ${user} were stargazing beside a calm lake while soft music played.`,

`💫 You and ${user} drifted through space together holding hands among the stars.`,

`🏖️ You and ${user} walked barefoot on a quiet beach during sunset.`,

`🎮 You and ${user} built a cute Minecraft house together all night 😭`,

`🍓 You and ${user} shared desserts at a tiny cozy café during the rain.`,

`🌌 You and ${user} discovered a magical hidden world full of glowing roses.`,

`💖 You and ${user} slow danced together under moonlight.`,

`🚗 You and ${user} went on a peaceful late-night drive while listening to soft songs.`

    ];

    // Random dream
    const randomDream =
      dreams[Math.floor(Math.random() * dreams.length)];

    // GIFs
    const gifs = [
      "https://media.tenor.com/anime-sleep.gif",
      "https://media.tenor.com/night-anime.gif",
      "https://media.tenor.com/stars.gif",
      "https://media.tenor.com/romantic-anime.gif",
      "https://media.tenor.com/cozy-night.gif"
    ];

    const randomGif =
      gifs[Math.floor(Math.random() * gifs.length)];

    // Cute footer messages
    const footers = [
      "Sweet dreams 🌙",
      "Rose created a dream for you 💖",
      "Some dreams feel magical ✨",
      "A peaceful little fantasy 🌸",
      "Dreams can feel real sometimes 🫶"
    ];

    const randomFooter =
      footers[Math.floor(Math.random() * footers.length)];

    // Embed
    const embed = new EmbedBuilder()
      .setColor("#FF69B4")
      .setTitle("🌙 Dream Generator")
      .setDescription(randomDream)
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
