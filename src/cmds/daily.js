const {
    Discord,
    RichEmbed
  } = require('discord.js')
  const {
    EmbedColor
  } = require('../settings.json');
  exports.run = (client, message, paramaters) => {
    const user = message.member
    const key = user.id
    client.Currency.ensure(key, {
      balance: 500,
      lastUsed: null,
      SecSys: false
    })
    if (message.createdTimestamp - client.Currency.get(key).lastUsed >= 86400000) {
      client.Currency.set(key, {
        balance: client.Currency.get(key).balance + 100,
        lastUsed: message.createdTimestamp,
        SecSys: client.Currency.get(key).SecSys,
      })
      const newBal = new RichEmbed().setColor(EmbedColor).addField(`You have claimed your 100 daily credits!`, `Your balance is now ${client.Currency.get(key).balance}`)
      message.channel.send(newBal)
    }
    else {
      message.channel.send(`Command can only be used every **24 Hours**`)
    }
  }
  exports.info = {
    name: 'daily',
    category: 'currency',
    aliases: [],
    usage: 'daily',
    botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
    userPermissions: [],
  }