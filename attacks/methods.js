const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **Crows sms v1** 🚀')
	.setDescription("**METHODS !** \n ``sms`` \n ** Thông Tin ADMIN !** \n **ZALO : 0564731627** \n **FACEBOOK : NGUYỄN XUÂN TRƯỜNG** ")
	message.channel.send(embed1);
var gifler = ["https://media.giphy.com/media/BnnprnRn1nwqf2Z4df/giphy-downsized-large.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log('Methods ! Username Discord:' +  message.author.username)
	return;
	}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['methods'],
  permLevel: 0
}

exports.help = {
  name: 'methods',
  description: 'nxt',
  usage: 'methods'
}
