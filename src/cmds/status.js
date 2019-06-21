const { Discord, RichEmbed } = require('discord.js')
const moment = require('moment')
require('moment-duration-format')
const { EmbedColor } = require('../settings.json');
exports.run = (client, message, paramaters) => {
      const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

	const embed = new RichEmbed()
	.setColor(EmbedColor)
	.setTitle(`Bot's status!`)
	.addField("Mem Usage", `**${ (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB**`, true)
	.addField("Commands Used", `**${client.commandsUsed}**`, true)
	.addField("Uptime", `**${duration}**`, true)
	.addBlankField()
	.addField("Users", `**${client.users.size - 1}**`, true)
	.addField(`Servers`, `**${client.guilds.size.toLocaleString()}**`, true)
	.addField(`Channels`, `**${client.channels.size.toLocaleString()}**`, true)
	message.channel.send(embed);
}


exports.info = {
      name: 'status',
      category: 'information',
      aliases: ['stats'],
      usage: 'status',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}