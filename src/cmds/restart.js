const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor } = require('../settings.json');
exports.run = (client, message, paramaters) => {
message.channel.send('Restarting...').then(q => process.kill(0))


}


exports.info = {
      name: 'restart',
      category: 'developer',
      aliases: ['r', 'kys'],
      usage: 'restart',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}