const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor } = require('../settings.json');
exports.run = (client, message, paramaters) => {
      const user = message.mentions.members.first()

      if(!user) {
            message.channel.send(client.settings.err.NoArgs)
            return
      } else if(user.id === message.author.id) {
            message.channel.send(`You cant rob yourself!`)
            return
      } 
      const key = user.id
      client.Currency.ensure(key, {
            balance: 500,
            lastUsed: null,
            SecSys: false
        })
      
      if(client.Currency.get(user.id).balance <= 500) {
            message.channel.send(`This user does not have enough credits`)
      } else {
            const amountTaken = Math.floor(Math.random() * 500)
            const robChance = Math.random() * 1
      
      if(client.Currency.get(key).SecSys === true) {
            message.channel.send(`This user has a **Security System** and you were caught!`)
      } else if(robChance > .5) {
            const robbed = new RichEmbed() 
            .setTitle(`Success!`)
            .setColor(EmbedColor)
            .setDescription(`You took **${amountTaken}** credits from <@${user.id}>`)
            message.channel.send(robbed)
            client.Currency.set(user.id, {balance: client.Currency.get(user.id).balance - amountTaken, lastUsed: client.Currency.get(user.id).lastUsed,
                  SecSys: client.Currency.get(user.id).SecSys})
            client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + amountTaken, lastUsed: client.Currency.get(user.id).lastUsed,
                  SecSys: client.Currency.get(user.id).SecSys})
      } else if(robChance < .5) {
            const notRobbed = new RichEmbed()
            .setTitle(`You got caught and escaped with nothing!`)
            .setColor(EmbedColor)
            message.channel.send(notRobbed)
      }
      }


}


exports.info = {
      name: 'rob',
      category: 'currency',
      aliases: ['steal'],
      usage: 'rob \'user\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}