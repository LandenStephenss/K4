const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor, errors } = require('../settings.json');
exports.run = async (client, message, paramaters) => {
const key = message.author.id
const amount = parseInt(paramaters[0])
if(!amount || isNaN(amount)) {
      message.channel.send(errors.MissingArgs)
} else if(client.Currency.get(message.author.id).balance < amount) {
      return message.channel.send('You cannot deposit more than you have!')
}
const fee = amount * .02
await client.Bank.set(message.author.id, {balance: Math.floor(client.Bank.get(message.author.id).balance + (amount - fee))})
client.Currency.set(key, {balance: Math.floor(client.Currency.get(key).balance - amount), lastUsed: client.Currency.get(key).lastUsed, SecSys: client.Currency.get(key).SecSys})
const embed = new RichEmbed()
.setTitle('Deposit Successful')
.setFooter(`You have been charged a fee of ${fee} (2%)`)
.addField('Bank Balance', client.Bank.get(message.author.id).balance + ' Coins')
.setColor(EmbedColor)
message.channel.send(embed)

}


exports.info = {
      name: 'deposit',
      category: 'currency',
      aliases: [],
      usage: 'deposit \'amount\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}