let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Aidil Tipi
Script: @Nurotomo
Github: 
https://github.com/Axctbot

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @aidil.tipi
➥ YouTube:
youtube.com/c/AidilTipi

*Thanks To :*
Nurotomo
Axct Bot
Drawl Nag
MfarelS
ST4RZ
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Gopay: 089513837054
╠➥ Pulsa: 089513837054
╠➥ Dana: 089513837054
║>Request? Wa.me/62895704959080
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

