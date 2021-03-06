const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor, errors } = require('../settings.json');
exports.run = (client, message, paramaters) => {
const user = message.mentions.members.first()
const Role = message.guild.roles.find(f => f.name === 'Muted')
if(!user) {
      return message.channel.send(errors.MissingArgs)
} 
try {
if(user.roles.has(Role.id)) {
      message.channel.send(`${user.user.tag} is already muted!`)
} else if(!user.roles.has(Role.id)) {
      message.channel.send(`${user.user.tag} has been muted!`)
      user.send(`You were muted in ${message.guild.name}`)
      user.addRole(Role.id)
}} catch(err) {
      message.channel.send(`Could not mute this user. Make sure you have a **Muted** role!`)
}



}


exports.info = {
      name: 'mute',
      category: 'moderation',
      aliases: [],
      usage: 'mute \'user\'',
      botPermissions: ['MANAGE_ROLES', 'EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: ["KICK_MEMBERS"],
}