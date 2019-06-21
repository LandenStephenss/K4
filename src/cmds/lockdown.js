const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor } = require('../settings.json');
exports.run = (client, message, paramaters) => {
if(message.channel.permissionsFor(message.guild.id).has("SEND_MESSAGES")) {
      message.channel.overwritePermissions(message.guild.id, {
            READ_MESSAGES: false,
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
      })
      message.channel.send('Channel is now on lockdown')
} else if(!message.channel.permissionsFor(message.guild.id).has('SEND_MESSAGES')) {
      message.channel.overwritePermissions(message.guild.id, {
            READ_MESSAGES: true,
            SEND_MESSAGES: true,
            ADD_REACTIONS: true
      })
      message.channel.send('Channel is no longer on lockdown')
}


}


exports.info = {
      name: 'lockdown',
      category: 'moderation',
      aliases: ['ld'],
      usage: 'lockdown',
      botPermissions: ['MANAGE_CHANNELS', 'EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: ['MANAGE_CHANNELS'],
}