const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor, errors } = require('../settings.json');
exports.run = async (client, message, params) => {

      if(params.length === 0) {
            return message.channel.send(errors.MissingArgs)
            }
                const botLog = client.guilds.get("592100762826309673").channels.get("592116762657685525")
                const Embed = new RichEmbed()
                .setColor(16776960)
                .setTitle(`New suggestion from: ${message.author.tag}`)
                .setDescription(params.join(" "))
               botLog.send(Embed)
                message.channel.send('Your suggestion has been sent!')

}


exports.info = {
      name: 'suggestion',
      category: 'misc',
      aliases: ['suggest', 'report'],
      usage: 'suggestion \'content \'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}