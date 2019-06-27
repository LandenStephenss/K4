const {
      Discord,
      RichEmbed
    } = require('discord.js')
    const {
      EmbedColor
    } = require('../settings.json');
    exports.run = (client, message, paramaters) => {
      const embed = new RichEmbed().setColor(EmbedColor).setTitle(`<:d20:591231078044401665> You rolled a **${Math.floor(Math.random() * 6)}** and a **${Math.floor(Math.random() * 6)}** <:d20:591231078044401665>`)
      message.channel.send(embed)
    }
    exports.info = {
      name: 'dice',
      category: 'fun',
      aliases: [],
      usage: 'dice',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
    }