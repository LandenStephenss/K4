const {
      Discord,
      RichEmbed
    } = require('discord.js')
    const {
      EmbedColor
    } = require('../settings.json')
    exports.run = (client, message, paramaters) => {
      const Invite = new RichEmbed()
      Invite.setDescription(`Invite me [here](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=268545094)`)
      Invite.setColor(EmbedColor)
      message.channel.send(Invite)
    }
    exports.info = {
      name: 'invite',
      category: 'misc',
      aliases: [],
      usage: 'invite',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
    }