const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor, errors } = require('../settings.json');
exports.run = (client, message, paramaters) => {
      const link = 'http://lmgtfy.com/?q='

      if(!paramaters[0]) {
          message.channel.send(errors.MissingArgs)
      } else {
          message.channel.send(`Here you go!\n${link}${paramaters.join("+")}`)
      }
      
}


exports.info = {
      name: 'lmgtfy',
      category: 'fun',
      aliases: ['google'],
      usage: 'lmgtfy \'content\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}