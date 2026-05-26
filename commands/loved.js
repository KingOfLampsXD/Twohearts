const {
EmbedBuilder
}=require("discord.js");

module.exports={

name:"loved",
aliases:["loveletter","ll"],

async execute(message){

const letters=[

`🌙 Late night thoughts...

Rose, if I had to choose between sleep and you...

yeah sleep lost 😭💞`,

`💌 Love note:

Somehow you became my favorite notification.

I still don't know how.`,

`🌸 Tiny confession:

Maximum clingy energy detected.

Escape disabled.`,

`💞 Relationship status:

Rose smiled.

Lampy stopped functioning 😭`,

`✨ Twohearts report:

Distance Monster defeated.

Reason:

too much love.`,

`😭 Emergency message:

Love levels exceeded safe limits.

System overheating.`,

`💖 Small reminder:

No matter what happens—

Lampy ❤️ Rose forever.`

];

const gifs=[

"https://media.tenor.com/y2w6sY0l2r8AAAAd/cute-anime-hug.gif",
"https://media.tenor.com/WK_Ds6P7A5EAAAAd/couple-anime.gif",
"https://media.tenor.com/4N6kK7Y4F6QAAAAd/anime-love.gif"

];

const letter=
letters[
Math.floor(
Math.random()*letters.length
)];

const gif=
gifs[
Math.floor(
Math.random()*gifs.length
)];

const embed=
new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle("💞 Loved.exe")

.setDescription(letter)

.setImage(gif)

.setFooter({
text:"Lampy ❤️ Rose forever 😭"
});


message.reply({
embeds:[embed]
});

}

};
