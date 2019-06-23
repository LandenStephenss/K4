const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor, token } = require('../settings.json');
exports.run = (client, message, paramaters) => {

	const code = paramaters.join(" ");
	const util = require("util");
	if (code < 1) {
		message.channel.send("Please input some code!")
	} else
	if (code.includes("client.token")) {
		message.channel.send("Unable to eval that code!");
	} else {
		const hrStart = process.hrtime();
		new Promise(r => r(eval(code))).then(evaled => {
			if (util.inspect(evaled, {
					depth: 0
				}).includes(client.token) || util.inspect(evaled, { depth: 0 }).includes(client.token.toLowerCase()) || util.inspect(evaled, {depth: 0 }).includes(client.token.toUpperCase())) {
				message.channel.send("Unable to eval that code!");
			} else {
				hrDiff = process.hrtime(hrStart);
				message.channel.send({
					embed: {
						title: `Success! || Evaled in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms`,
						color: "1048335",
						description: `Input: :inbox_tray:\n\`\`\`js\n${code}\`\`\`\nOutput: :outbox_tray: \`\`\`js\n${util.inspect(evaled, {
							depth: 0}
							)}\`\`\``
										}
				});
			}
		}).catch(err => {
			message.channel.send({
				embed: {
					title: "Error!",
					color: "16715535",
					description: `Input: :inbox_tray:\n\`\`\`js\n${code}\`\`\`\nOutput: :outbox_tray:\n\`\`\`js\n${err}\`\`\``
				}
			});
		});
	}

}


exports.info = {
      name: 'eval',
      category: 'developer',
      aliases: ['code', 'run'],
      usage: 'eval \'code\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}