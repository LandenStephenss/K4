const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor, errors } = require('../settings.json');
exports.run = async (client, message, paramaters) => {
const amount = parseInt(paramaters[0])
const key = message.author.id
if(!amount || isNaN(amount)) {
      return message.channel.send(errors.MissingArgs)
} else if(client.Bank.get(message.author.id).balance < amount) {
     return message.channel.send('You do not have enough coins in the bank!')
}

const fee = amount * .02

await client.Bank.set(message.author.id, {balance: Math.floor(client.Bank.get(message.author.id).balance - (amount))})
client.Currency.set(key, {balance: Math.floor(client.Currency.get(key).balance + (amount - fee)), lastUsed: client.Currency.get(key).lastUsed, SecSys: client.Currency.get(key).SecSys})
const embed = new RichEmbed()
.setTitle('Withdraw Successful')
.setFooter(`You have been charged a fee of ${fee} (2%)`)
.addField('Bank Balance', client.Bank.get(message.author.id).balance + ' Coins')
.setColor(EmbedColor)
message.channel.send(embed)


}


exports.info = {
      name: 'withdraw',
      category: 'currency',
      aliases: [],
      usage: 'withdraw \'amount\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}