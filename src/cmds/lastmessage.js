const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor } = require('../settings.json');
exports.run = (client, message, paramaters) => {

      let user = message.guild.members.get(paramaters[0]) || message.mentions.members.first() 

      if(!user) {
            return message.channel.send(`Please mention a user or use an ID!`)
      }
      
      const embed = new RichEmbed()
      .setTitle(`${user.user.tag}'s last message in ${message.channel.name}`)
      .setColor(EmbedColor)
      if(user.lastMessage === null) {
            embed.addField('Last Message', 'None')
      } else {
            embed.addField('Message Content:', `${user.lastMessage.content}\n[Jump To](https://discordapp.com/channels/${message.guild.id}/${message.channel.id}/${user.lastMessage.id})`)
            embed.addField('Sent At:', `${user.user.createdAt.toLocaleString()}` )
      
      }
message.channel.send(embed)
}


exports.info = {
      name: 'lastmessage',
      category: 'information',
      aliases: ['lm'],
      usage: 'lastmessage \'user\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}