const {
      Discord,
      RichEmbed
    } = require('discord.js')
    const {
      EmbedColor,
      errors
    } = require('../settings.json');
    exports.run = (client, message, paramaters) => {
      const user = message.mentions.members.first()
      const role = message.guild.roles.find(f => f.name === paramaters[1])
      try {
        if (!user) {
          message.channel.send(errors.MissingArgs)
        }
        else if (!role) {
          message.channel.send(errors.MissingArgs)
        }
        else if (message.guild.roles.has(role.id)) {
          if (user.roles.has(role.id)) {
            message.channel.send({
              embed: {
                description: `${user.user.tag} already has <@&${role.id}>`,
                color: EmbedColor
              }
            })
          }
          else {
            user.addRole(role.id).then(f => {
              message.channel.send({
                embed: {
                  description: `${user.user.tag} was given <@&${role.id}>`,
                  color: EmbedColor
                }
              })
            }).catch(err => message.channel.send(`I cannot add that role to ${user.user.tag}.`))
          }
        }
      }
      catch (err) {
        message.channel.send(`I could not find that role!`)
      }
    }
    exports.info = {
      name: 'addrole',
      category: 'moderation',
      aliases: ['giverole'],
      usage: 'addrole \'user\' \'role\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: ["MANAGE_ROLES"],
    }