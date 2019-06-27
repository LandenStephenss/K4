const {
      Discord,
      RichEmbed
    } = require('discord.js')
    const {
      EmbedColor
    } = require('../settings.json');
    exports.run = (client, message, paramaters) => {
      let User = message.mentions.members.first() || message.member
      let gayLevelPer = Math.floor(Math.random() * 100)
      client.howgay.ensure(User.id, gayLevelPer)
      const gayLevel = new RichEmbed().setTitle(`How gay is ${User.user.username}?`).setDescription(`:gay_pride_flag:  ${User.user.username} is ${client.howgay.get(User.id)}% gay! :gay_pride_flag: `).setColor(EmbedColor)
      message.channel.send(gayLevel)
    }
    exports.info = {
      name: 'howgay',
      category: 'fun',
      aliases: [],
      usage: 'howgay \'user\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
    }