const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor, errors } = require('../settings.json');
exports.run = (client, message, paramaters) => {
const user = message.mentions.members.first() || message.guild.members.get(paramaters[0])
if(!user) {
      message.channel.send(errors.MissingMention)
} else if(!message.guild.members.has(user.id)) {
      message.channel.send(errors.NoUser)
} else if(user.bannable === false) {
      message.channel.send(`That user could not be banned!`)
} else {


const Ban = new RichEmbed()
Kick.setTitle(`${user.user.tag} was banned!`)
Kick.setColor(EmbedColor)
Kick.addField('By:', `<@${message.author.id}>`)
Kick.setFooter(`Time: ${message.createdAt.toLocaleString()}`)
message.channel.send(Ban)
user.ban()
}

}


exports.info = {
      name: 'ban',
      category: 'moderation',
      aliases: [],
      usage: 'ban \'user\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES', 'KICK_MEMBERS'],
      userPermissions: ['BAN_MEMBERS'],
}