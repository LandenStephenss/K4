const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor, errors } = require('../settings.json');
exports.run = (client, message, paramaters) => {
      let bet = parseInt(paramaters[0])
      if(!paramaters[0] || isNaN(paramaters[0]) || bet < 0) {
            return message.channel.send(errors.MissingArgs)
      } 
      
      if((client.Currency.get(message.author.id).balance - bet) < 0 === true) {
            return message.channel.send('You do not have enough coins for that!')
       }  
      const chance = Math.floor(Math.random() * 6)
      const embed = new RichEmbed()
      if(chance % 2 === 0) {
           embed.setTitle('You win!')
           embed.setDescription(`You rolled a ${chance}`)
           embed.addField('Bet', bet, true)
           embed.setColor(EmbedColor)
           embed.addField('Won', bet * 2, true)
           message.channel.send(embed)
           client.Currency.set(message.author.id, {balance: (client.Currency.get(message.author.id).balance - bet) + (bet * 2), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      } else {
            embed.setTitle('You win!')
            embed.setDescription(`You rolled a ${chance}`)
            embed.addField('Bet', bet, true)
            embed.setColor(EmbedColor)
            embed.addField('Lost', bet, true)
            message.channel.send(embed)
            client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance - (bet), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      }

       
}


exports.info = {
      name: 'bet',
      category: 'fun',
      aliases: ['gamble'],
      usage: 'bet \'amount\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}