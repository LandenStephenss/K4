const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor } = require('../settings.json');
exports.run = (client, message, paramaters) => {

      const user = message.mentions.members.first() || message.guild.members.find(f => f.user.username.toLowerCase() === paramaters[0])  || message.member 


      const embed = new RichEmbed()
      .setColor(EmbedColor)
      .setTitle(`${user.user.username}'\s Avatar!`)
      .setImage(user.user.displayAvatarURL)
      message.channel.send(embed)
      

}


exports.info = {
      name: 'avatar',
      category: 'information',
      aliases: ['pfp', 'icon'],
      usage: 'avatar \'user\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}