const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor, errors } = require('../settings.json');
exports.run = (client, message, paramaters) => {
	const responses = ['It is certain', 'Without a doubt', 'You may rely on it', 'Yes, definitely', 'As i see it, yes', 'Most likely', 'Yes', 'The outlook is good', 'Signs point to yes', 'Reply hazy, try again', 'Better not tell you now', 'Ask again later', 'Cannot predict now', 'Dont count on it', 'Outlook not so good', 'My sources say no', 'Very doubtful', 'My reply is no']
	const question = paramaters.join(" ")
	if(!question) {
		message.channel.send(errors.MissingArgs)
	} else { 
            const embed = new RichEmbed()
            .setDescription(`Question: **${question}**`)
            .addField(`The magic 8ball says:`, `${responses[Math.floor(Math.random() * responses.length)]}`)
            .setColor(EmbedColor)
		 message.channel.send(embed)
	}


}


exports.info = {
      name: '8ball',
      category: 'fun',
      aliases: ['magic8'],
      usage: '8ball \'question\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}