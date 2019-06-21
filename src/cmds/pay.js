const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor, errors } = require('../settings.json');
exports.run = (client, message, paramaters) => {

      const user = message.mentions.members.first()
      const amount = paramaters[1]
      if(!user) {
            message.channel.send(errors.MissingArgs)
            return
      } else if(!amount) {
            message.channel.send(errors.MissingArgs)
            return
      } if(isNaN(amount) === true) {
        message.channel.send('Please use a number')    
        return
      } else if(client.Currency.get(message.author.id).balance - amount < 0) {
            message.channel.send(`You do not have enough money to do that!`)
            return
      } else if(amount < 100) {
            message.channel.send(`Please send more than 100 credits`)
            return
      } else if(user.id === message.author.id) {
            message.channel.send(`You cannot pay yourself!`)
            return
      } else if(user.id === '554686340248371209') {
            message.channel.send(`You cannot pay me!`)
            return
      }
      
      
      else {
            client.Currency.ensure(user.id, {
                  balance: 500,
                  lastUsed: null,
                  SecSys: false
            })
      
            const payment = new RichEmbed()
            .setColor(EmbedColor)
            .setTitle('Payment Successful!')
            .addField('User', `**${user.user.tag}**`, true)
            .addField('Amount', `**${amount}**`, true)
            message.channel.send(payment)
            client.Currency.set(user.id, {balance: client.Currency.get(user.id).balance + Math.floor(amount), lastUsed: client.Currency.get(user.id).lastUsed, SecSys: client.Currency.get(user.id).SecSys})
            client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance - amount, lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      }

}


exports.info = {
      name: 'pay',
      category: 'currency',
      aliases: [],
      usage: 'pay',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}