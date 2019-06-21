const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor } = require('../settings.json');
exports.run = (client, message, params) => {
      const key = message.author.id
      client.Currency.ensure(key, {
            balance: 500,
            lastUsed: null,
            SecSys: false
        })

if(!params[0]) {
      const Shop = new RichEmbed()
      .setColor(EmbedColor)
      .setTitle('Shop!')
      .addField(`Security System - 10,000`, 'Never get robbed again! __Run **>shop Security** to buy__')
      message.channel.send(Shop)
} if(params[0] === "Security") {
      if(client.Currency.get(key).SecSys === true) {
            message.channel.send(`You already have a **Security System**`)
      } else if(client.Currency.get(key).balance < 10000) {
            message.channel.send(`You do not have enough money to buy this!`)
      } else if(client.Currency.get(key).SecSys === true) {
            message.channel.send(`You already have this item!`)
      } else {
            client.Currency.set(key, {balance: client.Currency.get(key).balance, lastUsed: client.Currency.get(key).lastUsed, SecSys: true})
            message.channel.send(`You bought the **Security System**`)
      }
}



}


exports.info = {
      name: 'shop',
      category: 'currency',
      aliases: ['store'],
      usage: 'shop \'item\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}