const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor } = require('../settings.json');
exports.run = (client, message, paramaters) => {
const user = message.mentions.members.first() || message.member

const Level = new RichEmbed()
Level.setTitle(`${user.user.tag}'s rank!`)
Level.addField('Level', `${client.points.get(user.id).level}`, true)
Level.addField('Points', `${client.points.get(user.id).points}`, true)
Level.setColor(EmbedColor)
message.channel.send(Level)
}

exports.info = {
      name: 'rank',
      category: 'levels',
      aliases: ['level'],
      usage: 'rank \'user\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}