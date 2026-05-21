// commands/care.js

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "care",
  aliases: ["comfort", "takecare"],

  async execute(message, args) {

    const user =
      message.mentions.users.first() ||
      message.author;

    // Caring messages
    const messages = [

`🫶 ${user}, don't forget to rest properly today okay?  
You deserve peace too 🌸`,

`🌙 ${user}, please drink some water and take care of yourself 💖`,

`💌 ${user}, you've been trying so hard lately.  
Rose is proud of you 🫂`,

`🌸 ${user}, even difficult days will pass eventually.  
Please stay gentle with yourself.`,

`✨ ${user}, your feelings matter more than you think 💖`,

`🧸 ${user}, it's okay to slow down sometimes.  
You don't always have to be strong.`,

`🌹 ${user}, I hope something beautiful happens for you today.`,

`💖 ${user}, remember that your existence matters to people around you.`,

`☁️ ${user}, take a deep breath.  
Everything doesn't need to be solved all at once.`,

`🌧️ ${user}, bad days don't define who you are.  
You're still important 🫶`,

`🌸 ${user}, please don't overwork yourself today.`,

`💫 ${user}, Rose hopes your heart feels lighter soon.`

    ];

    // Random message
    const randomMessage =
      messages[Math.floor(Math.random() * messages.length)];

    // Cozy GIFs
    const gifs = [
      "https://media.tenor.com/anime-hug.gif",
      "https://media.tenor.com/cozy-anime.gif",
      "https://media.tenor.com/comfort.gif",
      "https://media.tenor.com/cute-hug.gif",
      "https://media.tenor.com/soft-anime.gif"
    ];

    const randomGif =
      gifs[Math.floor(Math.random() * gifs.length)];

    // Footer messages
    const footers = [
      "Rose cares about you 🌹",
      "Take care of yourself 💖",
      "You deserve kindness 🌸",
      "Soft hearts need rest too 🫶",
      "Everything will be okay eventually 🌙"
    ];

    const randomFooter =
      footers[Math.floor(Math.random() * footers.length)];

    // Embed
    const embed = new EmbedBuilder()
      .setColor("#FF69B4")
      .setTitle("💖 Care Message")
      .setDescription(randomMessage)
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
