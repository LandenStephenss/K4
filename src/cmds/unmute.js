
const { errors } = require('../settings.json');
exports.run = (client, message, paramaters) => {
const user = message.mentions.members.first()
const Role = message.guild.roles.find(f => f.name === 'Muted')

if(!user) {
      message.channel.send(errors.MissingArgs)
}
try {

if(user.roles.has(Role.id)) {
      message.channel.send(`${user.user.tag} was unmuted.`)
      user.send(`You were unmuted in ${message.guild.name}`)
      user.removeRole(Role.id)
} else if(!user.roles.has(Role.id)) {
      message.channel.send(`${user.user.tag} has not been muted.`)
}

} catch(err) {
      message.channel.send(`Could not mute this user. Make sure you have a **Muted** role!`)
}

}


exports.info = {
      name: 'unmute',
      category: 'moderation',
      aliases: [],
      usage: 'unmute \'user\'',
      botPermissions: ['MANAGE_ROLES', 'EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: ['MANAGE_ROLES'],
}