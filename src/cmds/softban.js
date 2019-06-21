const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor, errors } = require('../settings.json');
exports.run = (client, message, paramaters) => {
const user = message.guild.get(paramaters[0]) || message.mentions.members.first()
      if(!user) {
            message.channel.send(errors.MissingArgs)
      }
}


exports.info = {
      name: 'softban',
      category: 'moderation',
      aliases: [],
      usage: 'softban \'user\'',
      botPermissions: ['BAN_MEMBERS', 'EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: ['BAN_MEMBERS'],
}