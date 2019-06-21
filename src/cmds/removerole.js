const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor, errors } = require('../settings.json');
exports.run = (client, message, paramaters) => {
const user = message.mentions.members.first()
const role = message.guild.roles.find(f => f.name === paramaters[1])
try {
if(!user) {
      message.channel.send(errors.MissingArgs)
} else if(!role) {
      message.channel.send(errors.MissingArgs)    
} else if(message.guild.roles.has(role.id)) {
      if(!user.roles.has(role.id)) {
            message.channel.send({embed: {description: `${user.user.tag} does not have <@&${role.id}>`, color: EmbedColor}})
      } else {
            message.channel.send({embed: {description: `${user.user.tag} was taken away <@&${role.id}>`, color: EmbedColor}})
            user.removeRole(role.id)
      }
}
} catch(err) {
      message.channel.send(`I could not find that role!`)
      
}     

}


exports.info = {
      name: 'removerole',
      category: 'moderation',
      aliases: ['delrole'],
      usage: 'removerole \'user\' \'role\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: ["MANAGE_ROLES"],
}