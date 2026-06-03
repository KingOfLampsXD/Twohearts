const {
EmbedBuilder
}=require("discord.js");

module.exports={

name:"sorryrose",

async execute(message){

const embed=
new EmbedBuilder()

.setColor("#ff7eb6")

.setTitle(
"💌 Sorry Rose..."
)

.setDescription(

`Rose...

I am really really sorry.

Mujhe bhi nahi pata tha maine itna kuch keh diya tha. Main us time bohot gusse me tha aur honestly rage issues me mera khud par kabu nahi rehta tha.

Jo kuch maine kaha woh galat tha. Main yeh nahi bol raha ki rage issues ki wajah se sab theek ho jata hai, bas yeh bata raha hu ki us waqt mera dimag sahi se kaam nahi kar raha tha. Main kuch bhi soch raha tha aur jo muh me aa raha tha bol raha tha.

Aur maine woh baatein isliye bhi kahi kyunki woh log hum dono ko nahi jaante. Unhe nahi pata tum kaun ho, humare beech kya hai, aur tum mere liye kitni important ho.

Sach bolu toh agar us waqt mera control hota na, toh main woh sab kabhi nahi kehta.

Main khud ab sochta hu ki maine itna sab kaise bol diya.

Mujhe pata hai maine apko hurt kiya. Bohot hurt kiya.

Aur uske liye main genuinely sorry hu.

Tum mujhe koi bhi 5 punishments de sakti ho, main maan lunga.

Main 7 din ka fast bhi rakh lunga as a sorry.

Mujhe farq nahi padta punishments virtual ho ya real.

Main yeh sab sympathy ke liye nahi keh raha.

Main yeh keh raha hu kyunki mujhe apni galti ka ahass hai aur mujhe regret hai.

Main bas yeh chahta hu ki tum yeh jaano ki jo kuch maine gusse me bola tha, woh meri best side nahi thi.

Woh meri sabse buri side thi.

Aur mujhe us side se nafrat hai.

I am really, really sorry Rose.

❤️`

)

.setFooter({
text:"Lampy ❤️ Rose"
});

message.reply({
embeds:[embed]
});

}

};
