const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor, errors } = require('../settings.json');
const moment = require('moment')
exports.run = (client, message, paramaters) => {
      if(!paramaters[0]) return message.channel.send(errors.MissingArgs)
	const role =  message.guild.roles.find("name", paramaters[0]) || message.mentions.roles.first()
      
     
try {
      const embed = new RichEmbed()
      .setColor(role.color).setAuthor(role.name, message.guild.iconURL).addField("User Count!", `${role.members.size} users!`, true).addField("Created At", `${role.createdAt.toLocaleString()}`, true);
	message.channel.send({
		embed
	});

} catch(err) {
      message.channel.send(`Cannot find that role!`)
}
}


exports.info = {
      name: 'roleinfo',
      category: 'information',
      aliases: [],
      usage: 'roleinfo \'role\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}