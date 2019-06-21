const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor } = require('../settings.json');
exports.run = (client, message, paramaters) => {

      const user = message.mentions.members.first() || message.member
      const key = user.id
      client.DickSize.ensure(user.id, {
          size: Math.floor(Math.random() * 12)
      })
      const ppSize = []
      for(var i = 0; i < client.DickSize.get(key).size; i++) {
          ppSize.push("=")
      }
      
         
      
      const size = new RichEmbed()
          .setTitle(`${client.users.get(key).tag}'s dick size!`)
          .addField(`**${client.DickSize.get(key).size}** inches!`, `8${ppSize.join("")}D`)
          .setColor(EmbedColor)
          message.channel.send(size)

}


exports.info = {
      name: 'pp',
      category: 'fun',
      aliases: ['dick'],
      usage: 'pp \'user\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}