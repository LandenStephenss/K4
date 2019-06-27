const {
      Discord,
      RichEmbed
    } = require('discord.js')
    const {
      EmbedColor
    } = require('../settings.json');
    exports.run = (client, message, paramaters) => {
      const discrimInput = paramaters[0] || message.author.discriminator
      const discrims = client.users.filter(f => f.discriminator === discrimInput).first(10)
      const embed = new RichEmbed().setTitle(`Here are the users with the discriminator **${discrimInput}**`).setColor(EmbedColor).setDescription(discrims.map(f => f.tag).join('\n')).setFooter(`Showing the first 10 users. ${client.users.filter(f => f.discriminator === discrimInput).size} total users with that discriminator`)
      message.channel.send(embed)
    }
    exports.info = {
      name: 'discriminator',
      category: 'information',
      aliases: ['discrim'],
      usage: 'discriminator \'user\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
    }