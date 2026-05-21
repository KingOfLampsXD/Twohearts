// commands/universe.js

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "universe",
  aliases: ["paralleluniverse", "fantasyworld"],

  async execute(message, args) {

    const user =
      message.mentions.users.first() ||
      message.author;

    // Universe scenarios
    const universes = [

{
title: "🌌 Cyberpunk Universe",
description:
`Neon lights covered the endless city while ${user} wandered through rainy streets with glowing holograms everywhere.  
Rose became a mysterious hacker protecting the city from hidden dangers 💻✨`
},

{
title: "🌸 Sakura Universe",
description:
`${user} lived in a peaceful town where pink cherry blossoms fell endlessly from the sky.  
Every evening felt soft and magical 🌸`
},

{
title: "🌙 Moon Kingdom",
description:
`${user} ruled a silver kingdom floating above the clouds.  
The night sky glowed beautifully while stars circled the palace ✨`
},

{
title: "🏴‍☠️ Pirate Universe",
description:
`${user} sailed across dangerous oceans searching for hidden treasure with a chaotic pirate crew 😭`
},

{
title: "🎮 Gaming Universe",
description:
`${user} woke up trapped inside a giant video game world full of quests, monsters, and secret powers ⚔️`
},

{
title: "🧸 Cozy Café Universe",
description:
`${user} owned a tiny warm café where rainy nights, soft music, and strawberry desserts comforted everyone ☕🌧️`
},

{
title: "🐉 Fantasy Universe",
description:
`${user} traveled across magical kingdoms with dragons flying above ancient castles ✨`
},

{
title: "🚀 Space Universe",
description:
`${user} explored unknown galaxies while discovering glowing planets and strange cosmic creatures 🌌`
},

{
title: "🌧️ Rainy City Universe",
description:
`${user} lived in a quiet city where it rained every night and neon reflections glowed across empty streets ☔`
},

{
title: "🕰️ Time Travel Universe",
description:
`${user} discovered a hidden watch that allowed travel through different timelines and forgotten worlds ⏳`
}

    ];

    // Random universe
    const randomUniverse =
      universes[Math.floor(Math.random() * universes.length)];

    // GIFs
    const gifs = [
      "https://media.tenor.com/space.gif",
      "https://media.tenor.com/anime-city.gif",
      "https://media.tenor.com/night-rain.gif",
      "https://media.tenor.com/cyberpunk.gif",
      "https://media.tenor.com/stars-anime.gif"
    ];

    const randomGif =
      gifs[Math.floor(Math.random() * gifs.length)];

    // Footer messages
    const footers = [
      "Another reality has appeared 🌌",
      "Every universe tells a story ✨",
      "Rose opened a portal 🌙",
      "A different world awaits 💖",
      "Parallel dimensions discovered 🫶"
    ];

    const randomFooter =
      footers[Math.floor(Math.random() * footers.length)];

    // Embed
    const embed = new EmbedBuilder()
      .setColor("#FF69B4")
      .setTitle(randomUniverse.title)
      .setDescription(randomUniverse.description)
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
