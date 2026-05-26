const {
EmbedBuilder
}=require("discord.js");

module.exports={

name:"cantletgo",
aliases:["clingy","lockedin"],

async execute(message){

const moments=[

`🌙 Late night mode activated...

Everything was quiet.

Rose moved a little closer.

Lampy noticed.

Then noticed again.

...

Silence.

A few seconds passed.

💞 Rose leaned against him.

Without even thinking,
Lampy held her a little closer.

No one said anything.

But somehow the room felt warmer.

❤️ Heartbeat level: increasing
😭 Brain.exe: stopped functioning
🌸 Escape chances: 0%`,

`💖 Twohearts relationship report:

Rose smiled.

Critical mistake.

Lampy completely forgot
what he was about to say.

Eye contact lasted...

a little too long.

✨ Nearby atmosphere changed.

Personal space slowly vanished.

💞 Status:
maximum clingy energy reached.`,

`😭 Emergency heart report:

Distance between Lampy and Rose:

basically nonexistent.

Rose rested closer.

Lampy immediately wrapped an arm around her.

Several moments later...

nobody remembered who started it.

🌙 Mood: attached
❤️ Affection: MAX
💞 Leaving: denied`

];


const scene=
moments[
Math.floor(
Math.random()*moments.length
)
];


const embed=
new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"💞 Can't Let Go"
)

.setDescription(scene)

.setFooter({
text:"Lampy ❤️ Rose forever"
});


message.reply({
embeds:[embed]
});

}

}
