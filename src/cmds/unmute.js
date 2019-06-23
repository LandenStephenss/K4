const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor } = require('../settings.json');
exports.run = (client, message, paramaters) => {

// Because mute already unmutes a user if muted
client.cmds.get('mute').run(client, message, paramaters)
}


exports.info = {
      name: 'unmute',
      category: 'moderation',
      aliases: [],
      usage: 'unmute \'user\'',
      botPermissions: ['MANAGE_ROLES', 'EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: ['MANAGE_ROLES'],
}