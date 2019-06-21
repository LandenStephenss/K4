const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor } = require('../settings.json');
exports.run = async (client, message, params) => {

      const options = ['🍎', "🍐", "🍑", '🍆']
      const bet = params[0]
      client.Currency.ensure(message.author.id, {
          balance: 500,
          lastUsed: null
      })
      if(!bet) {
          message.channel.send(`Please provide an amount to bet`)
          return
      } else if(bet < 100) {
          message.channel.send(`You need to bet atleast 100 credits`)
          return
      }
  
      if(client.Currency.get(message.author.id).balance - bet < 0) {
          message.channel.send(`You do not have enough credits!`)
          return
      } else if(isNaN(params[0]) === true) {
          message.channel.send(`Please only use a number`)
          return
      }
  
  
      const FinalSlots = []
      const SlotMessage = await message.channel.send(`${options[Math.floor(Math.random() * options.length)]}${options[Math.floor(Math.random() * options.length)]}${options[Math.floor(Math.random() * options.length)]}\n${options[Math.floor(Math.random() * options.length)]}${options[Math.floor(Math.random() * options.length)]}${options[Math.floor(Math.random() * options.length)]}\n${options[Math.floor(Math.random() * options.length)]}${options[Math.floor(Math.random() * options.length)]}${options[Math.floor(Math.random() * options.length)]}`)
      await SlotMessage.edit(`${options[Math.floor(Math.random() * options.length)]}${options[Math.floor(Math.random() * options.length)]}${options[Math.floor(Math.random() * options.length)]}\n${options[Math.floor(Math.random() * options.length)]}${options[Math.floor(Math.random() * options.length)]}${options[Math.floor(Math.random() * options.length)]}\n${options[Math.floor(Math.random() * options.length)]}${options[Math.floor(Math.random() * options.length)]}${options[Math.floor(Math.random() * options.length)]}`)
      FinalSlots.push(options[Math.floor(Math.random() * options.length)])
      FinalSlots.push(options[Math.floor(Math.random() * options.length)])
      FinalSlots.push(options[Math.floor(Math.random() * options.length)])
      FinalSlots.push(options[Math.floor(Math.random() * options.length)])
      FinalSlots.push(options[Math.floor(Math.random() * options.length)])
      FinalSlots.push(options[Math.floor(Math.random() * options.length)])
      FinalSlots.push(options[Math.floor(Math.random() * options.length)])
      FinalSlots.push(options[Math.floor(Math.random() * options.length)])
      FinalSlots.push(options[Math.floor(Math.random() * options.length)])
  
  
      if(FinalSlots[3] === options[0] && FinalSlots[4] === options[0] && FinalSlots[5] === options[0]) { // Middle Row Check
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 1.6)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 1.6), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      } else if(FinalSlots[3] === options[1] && FinalSlots[4] === options[1] && FinalSlots[5] === options[1]) {
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 1.8)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 1.8), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      }  else if(FinalSlots[3] === options[2] && FinalSlots[4] === options[2] && FinalSlots[5] === options[2]) {
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 2)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 2), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      } else if(FinalSlots[3] === options[3] && FinalSlots[4] === options[3] && FinalSlots[5] === options[3]) {
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 2.5)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 2.5), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      } else if(FinalSlots[0] === options[0] && FinalSlots[1] === options[0] && FinalSlots[2] === options[0]) { // Top Row Check
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 1.6)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 1.6), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      } else if(FinalSlots[0] === options[1] && FinalSlots[1] === options[1] && FinalSlots[2] === options[1]) {
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 1.8)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 1.8), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      }  else if(FinalSlots[0] === options[2] && FinalSlots[1] === options[2] && FinalSlots[2] === options[2]) {
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 2)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 2), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      } else if(FinalSlots[0] === options[3] && FinalSlots[1] === options[3] && FinalSlots[2] === options[3]) {
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 2.5)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 2.5), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      }  else if(FinalSlots[6] === options[0] && FinalSlots[7] === options[0] && FinalSlots[8] === options[0]) { // Bottem Row Check
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 1.6)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 1.6), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      } else if(FinalSlots[6] === options[1] && FinalSlots[7] === options[1] && FinalSlots[8] === options[1]) {
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 1.8)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 1.8), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      }  else if(FinalSlots[6] === options[2] && FinalSlots[7] === options[2] && FinalSlots[8] === options[2]) {
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 2)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 2), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      } else if(FinalSlots[6] === options[3] && FinalSlots[7] === options[3] && FinalSlots[8] === options[3]) {
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 2.5)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 2.5), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      } else if(FinalSlots[0] === options[0] && FinalSlots[3] === options[0] && FinalSlots[6] === options[0]) { // Vertial 1
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 1.6)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 1.6), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      } else if(FinalSlots[0] === options[1] && FinalSlots[3] === options[1] && FinalSlots[6] === options[1]) {
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 1.8)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 1.8), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      }  else if(FinalSlots[0] === options[2] && FinalSlots[3] === options[2] && FinalSlots[6] === options[2]) {
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 2)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 2), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      } else if(FinalSlots[0] === options[3] && FinalSlots[3] === options[3] && FinalSlots[6] === options[3]) {
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 2.5)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 2.5), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      } else if(FinalSlots[1] === options[0] && FinalSlots[4] === options[0] && FinalSlots[7] === options[0]) { // Vertial 2
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 1.6)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 1.6), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      } else if(FinalSlots[1] === options[1] && FinalSlots[4] === options[1] && FinalSlots[7] === options[1]) {
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 1.8)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 1.8), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      }  else if(FinalSlots[1] === options[2] && FinalSlots[4] === options[2] && FinalSlots[7] === options[2]) {
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 2)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 2), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      } else if(FinalSlots[1] === options[3] && FinalSlots[4] === options[3] && FinalSlots[7] === options[3]) {
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 2.5)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 2.5), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      } else if(FinalSlots[2] === options[0] && FinalSlots[5] === options[0] && FinalSlots[8] === options[0]) { // Vertial 3
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 1.6)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 1.6), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      } else if(FinalSlots[2] === options[1] && FinalSlots[5] === options[1] && FinalSlots[8] === options[1]) {
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 1.8)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 1.8), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      }  else if(FinalSlots[2] === options[2] && FinalSlots[5] === options[2] && FinalSlots[8] === options[2]) {
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 2)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 2), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      } else if(FinalSlots[2] === options[3] && FinalSlots[5] === options[3] && FinalSlots[8] === options[3]) {
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You won ${Math.ceil(bet * 2.5)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (bet * 2.5), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      } 
      else { // Lost
          await SlotMessage.edit(`${FinalSlots[0]}${FinalSlots[1]}${FinalSlots[2]}\n${FinalSlots[3]}${FinalSlots[4]}${FinalSlots[5]}\n${FinalSlots[6]}${FinalSlots[7]}${FinalSlots[8]}\n You lost! You only got back ${Math.floor(bet * .25)} credits`)
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance - bet, lastUsed: client.Currency.get(message.author.id).lastUsed, secSys: client.Currency.get(message.author.id).SecSys})
          client.Currency.set(message.author.id, {balance: client.Currency.get(message.author.id).balance + (Math.floor(bet * .25)), lastUsed: client.Currency.get(message.author.id).lastUsed, SecSys: client.Currency.get(message.author.id).SecSys})
      }
  

}


exports.info = {
      name: 'slots',
      category: 'fun',
      aliases: [],
      usage: 'slots \'bet\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}