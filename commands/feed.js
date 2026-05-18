// commands/feed.js

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "feed",
  aliases: ["givefood"],

  async execute(message, args) {

    const user = message.mentions.users.first();

    // No mention
    if (!user) {
      return message.reply(
        "❌ Please mention someone to feed.\nExample: `.feed @user`"
      );
    }

    // Self check
    if (user.id === message.author.id) {
      return message.reply(
        "🍔 You can't feed yourself here 😭"
      );
    }

    // Bot check
    if (user.bot) {
      return message.reply(
        "🤖 Bots don't get hungry."
      );
    }

    // Random foods
    const foods = [
      "🍓 strawberry cake",
      "🍕 pizza",
      "🍜 ramen",
      "🍫 chocolate",
      "🍔 burger",
      "🍟 fries",
      "🍩 donuts",
      "🍣 sushi",
      "🍦 ice cream",
      "🍗 chicken nuggets"
    ];

    const randomFood =
      foods[Math.floor(Math.random() * foods.length)];

    // Cute GIFs
    const gifs = [
      "https://media.tenor.com/6lz.gif",
      "https://media.tenor.com/2ro.gif",
      "https://media.tenor.com/anime-feed.gif",
      "https://media.tenor.com/cute-feed.gif",
      "https://media.tenor.com/love-food.gif"
    ];

    const randomGif =
      gifs[Math.floor(Math.random() * gifs.length)];

    // Cute messages
    const messages = [
      "So adorable 💖",
      "Love is best served with food 🍰",
      "This is the cutest thing today ✨",
      "Sharing food = true love 💞",
      "Someone is getting spoiled today 😭"
    ];

    const randomMessage =
      messages[Math.floor(Math.random() * messages.length)];

    // Embed
    const embed = new EmbedBuilder()
      .setColor("#FF69B4")
      .setTitle("🍽️ Feeding Time")
      .setDescription(
        `💖 ${message.author} fed ${user} some ${randomFood}`
      )
      .setImage(randomGif)
      .setFooter({
        text: randomMessage
      })
      .setTimestamp();

    // Send
    await message.reply({
      embeds: [embed]
    });
  }
};
