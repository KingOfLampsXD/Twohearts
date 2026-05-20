// commands/loveradio.js

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "loveradio",
  aliases: ["lovemusic", "vibes"],

  async execute(message, args) {

    // Cozy songs & vibes
    const songs = [

      {
        title: "🌙 Midnight Rain",
        artist: "Taylor Swift",
        mood: "Soft night vibes",
        quote: "Some nights feel quieter with music 💖",
        link: "https://open.spotify.com/"
      },

      {
        title: "💫 Sweater Weather",
        artist: "The Neighbourhood",
        mood: "Late night comfort",
        quote: "Cold nights and warm feelings 🌸",
        link: "https://open.spotify.com/"
      },

      {
        title: "🌹 Apocalypse",
        artist: "Cigarettes After Sex",
        mood: "Romantic dreamy vibes",
        quote: "Love feels softer with this song ✨",
        link: "https://open.spotify.com/"
      },

      {
        title: "🌧️ Here With Me",
        artist: "d4vd",
        mood: "Comforting emotional vibes",
        quote: "Some songs feel like warm hugs 🫶",
        link: "https://open.spotify.com/"
      },

      {
        title: "💖 Until I Found You",
        artist: "Stephen Sanchez",
        mood: "Cute romantic energy",
        quote: "This song feels like gentle love 🌙",
        link: "https://open.spotify.com/"
      }

    ];

    // Random song
    const randomSong =
      songs[Math.floor(Math.random() * songs.length)];

    // GIFs
    const gifs = [
      "https://media.tenor.com/cozy-night.gif",
      "https://media.tenor.com/anime-rain.gif",
      "https://media.tenor.com/music-anime.gif",
      "https://media.tenor.com/night-vibes.gif",
      "https://media.tenor.com/lofi.gif"
    ];

    const randomGif =
      gifs[Math.floor(Math.random() * gifs.length)];

    // Embed
    const embed = new EmbedBuilder()
      .setColor("#FF69B4")
      .setTitle("💖 Love Radio")
      .setDescription(
        `🎶 **Now Playing**\n\n` +
        `💿 ${randomSong.title}\n` +
        `👤 ${randomSong.artist}\n\n` +
        `🌸 Mood: ${randomSong.mood}\n\n` +
        `💌 ${randomSong.quote}`
      )
      .addFields({
        name: "🎧 Listen",
        value: `[Open Spotify](${randomSong.link})`
      })
      .setImage(randomGif)
      .setFooter({
        text: "Picked with love 🌹"
      })
      .setTimestamp();

    // Send
    await message.reply({
      embeds: [embed]
    });
  }
};
