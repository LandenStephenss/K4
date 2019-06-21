const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor } = require('../settings.json');
exports.run = (client, message, paramaters) => {

      const user = message.mentions.members.first() || message.member
      const key = user.id
      client.Currency.ensure(key, {
            balance: 500,
            lastUsed: null,
            SecSys: false
      })
      const balEmbed = new RichEmbed()
      .addField(`${user.user.tag}'s balance!`, `${client.Currency.get(key).balance} Coins!`)
      .setColor(EmbedColor)
          message.channel.send(balEmbed)
      
      };

exports.info = {
      name: 'balance',
      category: 'currency',
      aliases: ['bal'],
      usage: 'bal \'user\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}