const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor, prefix } = require('../settings.json');
exports.run = (client, message, paramaters) => {
	function GatherCommands(cmdCategory) {
		let cmds = []
		client.cmds.forEach(c => {
			if(c.info.category === cmdCategory.toLowerCase()) {
				cmds.push(`${c.info.name}`)
			}
		})
		if(cmds.length === 0) {
			return "No commands!"
		} else if(cmds.length > 0) {
		return cmds
		}
	}

if(!paramaters[0]) {
const Help = new RichEmbed()
Help.setFooter(`Prefix for ${message.guild.name} is ${client.prefix.get(message.guild.id).prefix}`)
Help.setTitle(`Commands (${client.cmds.size})`)
Help.setURL('https://discord.gg/wnrcsU7')
if(message.author.id === '222563393649901580') {
	Help.addField(`Developer ⚙(${GatherCommands('developer').length})`, `\`${GatherCommands('developer').join("\`, \`")}\``)
}
if(message.member.hasPermission('KICK_MEMBERS')) {
	Help.addField(`Moderation 🚓 (${GatherCommands('moderation').length})`, `\`${GatherCommands('moderation').join("\`, \`")}\``)
     }
Help.addField(`Information 📁 (${GatherCommands('information').length})`, `\`${GatherCommands('information').join("\`,\`")}\``)

Help.addField(`Fun 🎲 (${GatherCommands('fun').length})`, `\`${GatherCommands('fun').join("\`, \`")}\``)
if(message.channel.nsfw) {
	Help.addField(`NSFW 🔞 (${GatherCommands('nsfw').length})`, `\`${GatherCommands('nsfw').join("\`, \`")}\``)
}
Help.addField(`Levels 🎚 (${GatherCommands('levels').length})`, `\`${GatherCommands('levels').join("\`, \`")}\``)
Help.addField(`Curreny 💸 (${GatherCommands('currency').length})`, `\`${GatherCommands('currency').join("\`, \`")}\``)
Help.setColor(EmbedColor)
Help.addField(`Misc ✴(${GatherCommands('misc').length})`, `\`${GatherCommands('misc').join("\`, \`")}\``)

message.channel.send(Help)
} else if(paramaters[0]) {
	if(!client.cmds.has(paramaters[0] || !client.cmds.has(client.aliases.get(paramaters[0])))) {
		message.channel.send(`I do not have the command **${client.prefix.get(message.guild.id).prefix}${paramaters[0]}**`)
	} else {
		const cmd = client.cmds.get(paramaters[0])
		var aliases;
		if(cmd.info.aliases.length === 0) {
			aliases = 'None'
		} else {
			aliases = cmd.info.aliases.join("\`, `")
		}
	const Help = new RichEmbed()
	Help.setFooter(`Prefix for ${message.guild.name} is ${client.prefix.get(message.guild.id).prefix}`)
	Help.setTitle(`Information For ${cmd.info.name}`)
	Help.setColor(EmbedColor)
	Help.addField('Usage', cmd.info.usage)
	Help.addField('Aliases', `\`${aliases}\``)
	message.channel.send(Help)
		}
	}
}

exports.info = {
      name: 'help',
      category: 'information',
      aliases: ['?', 'h'],
      usage: 'help \'command\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}