module.exports = {
    name:"fun",

async execute(message,args){

const sub=args[0]?.toLowerCase()

const lampy="KingOfLampsXD"
const rose="RoseDazzler"

function pick(arr){
return arr[Math.floor(Math.random()*arr.length)]
}

if(sub==="stare"){

const loser=Math.random()>.5?lampy:rose
const seconds=Math.floor(Math.random()*8)+2

return message.reply(
`👀 staring contest started...

${loser} lost after ${seconds} seconds 😭`
)

}

if(sub==="choose"){

const choices=[

["movie night","Roblox chaos"],

["Minecraft","late night VC"],

["spam memes","watch videos"],

["sleep call","music session"]

]

const c=pick(choices)

return message.reply(
`choose one:

❤️ ${c[0]}
❤️ ${c[1]}`
)

}

if(sub==="memorytest"){

const q=[

"who said i miss you first",

"who fell asleep in VC first",

"who confessed first",

"who gets distracted more",

"who starts chaos more"

]

return message.reply(
`memory test:

${pick(q)} 👀`
)

}

if(sub==="thisorthat"){

const q=[

["cuddle call","sleep call"],

["movie date","Minecraft date"],

["hug spam","kiss spam"],

["night walk","late vc"]

]

const x=pick(q)

return message.reply(
`this or that:

💗 ${x[0]}
💗 ${x[1]}`
)

}

if(sub==="challenge2"){

const c=[

"describe each other in 3 words",

"say your favorite memory",

"send one cute image",

"say one thing you appreciate"

]

return message.reply(
`challenge:

${pick(c)}`
)

}

if(sub==="compatibility"){

const types=[

"Minecraft teamwork",

"sleep call energy",

"chaos level",

"meme compatibility",

"late-night energy"

]

return message.reply(
`${pick(types)}

${Math.floor(Math.random()*31)+70}%`
)

}

if(sub==="firstmove"){

const q=[

"who apologizes first",

"who starts chaos",

"who says miss you first",

"who gets jealous first",

"who asks for VC first"

]

return message.reply(
`${pick(q)}

answer:

${Math.random()>.5?lampy:rose}`
)

}

if(sub==="stealheart"){

const winner=Math.random()>.5?lampy:rose

return message.reply(
`💖 ${winner} stole the heart this round`
)

}

if(sub==="mission2"){

const missions=[

"spend 5 mins together in VC",

"send each other a meme",

"say one wholesome thing",

"watch one random video together",

"tell one favorite memory"

]

return message.reply(
`mission unlocked:

${pick(missions)}`
)

}

if(sub==="fate"){

const f=[

"suspiciously wholesome",

"chaos approaching",

"VC required",

"extra cuddly today",

"meme disaster incoming"

]

return message.reply(
`✨ tonight's couple fate:

${pick(f)}`
)

}

}
}
