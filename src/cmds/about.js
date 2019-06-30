const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor } = require('../settings.json');
exports.run = (client, message, paramaters) => {

const AboutMe = new RichEmbed()
.setTitle('About Me!')
.addField('General Usage', `You can use **${client.prefix.get(message.guild.id).prefix}help** to view all of my commands. k³ is based off of permissions instead of roles, so to use ban for example you must have the **BAN_MEMBERS** permission.`)
.addField('Features', '- Moderation Commands\n- Informational Commands\m- Utility Commands\n- Leveling/Currency System\n- Per-Server Configuration')
.setFooter('Version: V4')
.setColor(EmbedColor)
message.channel.send(AboutMe)

}


exports.info = {
      name: 'about',
      category: 'information',
      aliases: [],
      usage: 'about',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}