const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor } = require('../settings.json');
const Pornsearch = require('pornsearch').search('pussy');
exports.run = (client, message, paramaters) => {

      var gif;
const embed = new RichEmbed()
.setTitle(`Pussy!`)
.setColor(EmbedColor)

Pornsearch.gifs()
  .then(gifs => { var gif = gifs[Math.floor(Math.random() * gifs.length)].url
      embed.setImage(`${gif}`)
      embed.setDescription(`[Go To](${gif})`)
        message.channel.send(embed) });

}


exports.info = {
      name: 'pussy',
      category: 'nsfw',
      aliases: [],
      usage: 'pussy',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}