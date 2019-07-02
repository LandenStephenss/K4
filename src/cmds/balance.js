const {
      Discord,
      RichEmbed
    } = require('discord.js')
    const {
      EmbedColor
    } = require('../settings.json');
    exports.run = (client, message, paramaters) => {
      const user = message.mentions.members.first() || message.member
      const key = user.id
      client.Currency.ensure(key, {
        balance: 500,
        lastUsed: null,
        SecSys: false
      })
      client.Bank.ensure(key, {
        balance: 0
      })
      const balEmbed = new RichEmbed()
      .setTitle(`${user.user.tag}'s balance!`)
      .addField('Wallet', `${client.Currency.get(key).balance} Coins`, true)
      .addField('Bank', client.Bank.get(message.author.id).balance + ' Coins', true)
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