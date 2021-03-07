let handler = async m => m.reply(`
╠═〘 DONASI 〙 ═
╠➥ Gopay: 089513837054
╠➥ Pulsa: 089513837054
╠➥ Dana: 089513837054
║>Request? Wa.me/62895704959080
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/62895704959080
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa, atau saldo gopay/dana"
3.)Dan terus masukkan nomor kami 089513837054
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
