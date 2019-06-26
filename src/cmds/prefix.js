const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor } = require('../settings.json');
exports.run = (client, message, paramaters) => {
if(!paramaters[0]) {
      message.channel.send(`Your prefix is currently ${client.prefix.get(message.guild.id).prefix}. To change it use \`>prefix >\`.`)
} else if(paramaters[0].length > 2) {
      message.channel.send('Prefixs cannot be over 2 characters')
} else if(paramaters[0] === client.prefix.get(message.guild.id).prefix) { 
message.channel.send(`${message.guild.name}'s prefix is already \`${client.prefix.get(message.guild.id).prefix}\``)
} else if(paramaters[0]) {
      message.channel.send(`My prefix is now \`${paramaters[0]}\``)
      client.prefix.set(message.guild.id, {prefix: paramaters[0]})
}


}


exports.info = {
      name: 'prefix',
      category: 'settings',
      aliases: [],
      usage: 'prefix \'prefix\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: ['ADMINISTRATOR'],
}