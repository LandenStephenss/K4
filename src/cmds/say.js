const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor, errors } = require('../settings.json');
exports.run = (client, message, paramaters) => {
      const messageToSay = paramaters.join(" ")
      if(!messageToSay) {
          message.channel.send(errors.MissingArgs)
      } else {
      message.channel.send(messageToSay)
      }


}


exports.info = {
      name: 'say',
      category: 'fun',
      aliases: [],
      usage: 'say \'text\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}