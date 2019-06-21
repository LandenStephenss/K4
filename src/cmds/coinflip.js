const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor } = require('../settings.json');
exports.run = (client, message, paramaters) => {

      let sides = ['heads', 'tails']
	let choice = sides[Math.floor(Math.random() * sides.length)]
	message.channel.send(`The coin landed on **${choice}**!`)

}


exports.info = {
      name: 'coinflip',
      category: 'fun',
      aliases: [],
      usage: 'coinflip',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}