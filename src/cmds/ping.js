const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor } = require('../settings.json');
exports.run = async (client, message, paramaters) => {
const ping = await message.channel.send('My ping is.')
await ping.edit('My ping is..')
await ping.edit('My ping is...')
await ping.edit(`My ping is **${Math.floor(client.ping)}**ms`)
}


exports.info = {
      name: 'ping',
      category: 'information',
      aliases: [],
      usage: 'ping',
      botPermissions: ['SEND_MESSAGES'],
      userPermissions: [],
}