const {
	Discord,
	RichEmbed
    } = require('discord.js')
    const {
	EmbedColor,
	token
    } = require('../settings.json');
    exports.run =  (client, message, paramaters) => {
	const code = paramaters.join(" ");
	const util = require("util");
	if (code < 1) {
	  message.channel.send("Please input some code!")
	}
	else
	if (code.includes("client.token")) {
	  message.channel.send("Unable to eval that code!");
	}
	else {
	  const hrStart = process.hrtime();
	  new Promise(r => r(eval(code))).then(async (evaled) => {

		if(evaled !== undefined && typeof evaled.then === 'function') {
			evaled = await evaled
			type = `Promise <${evaled != null ? evaled.constructor.name : 'void'}>`
		} else {
			type = evaled != null ? evaled.constructor.name : 'void';
		}

	    if (util.inspect(evaled, {
		  depth: 0
		}).includes(client.token) || util.inspect(evaled, {
		  depth: 0
		}).includes(client.token.toLowerCase()) || util.inspect(evaled, {
		  depth: 0
		}).includes(client.token.toUpperCase())) {
		message.channel.send("Unable to eval that code!");
	    }
	    else {
		hrDiff = process.hrtime(hrStart);
		const evalEmbed = new RichEmbed()
		.setTitle(`Success! || Evaled in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms`)
		.setColor(1048335)
		.addField('📥 Input:', `\`\`\`js\n${code}\`\`\``)
		.addField('📤 Output: ', `\`\`\`js\n${util.inspect(evaled, {compact: true, depth: 0})}\`\`\``)
		.setFooter(`Type: ${type}`)
		message.channel.send(evalEmbed);
	    }
	  }).catch(err => {
			hrDiff = process.hrtime(hrStart);
		const evalFail = new RichEmbed()
		.setTitle(`Error! || Evaled in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms`)
		.setColor(16715535)
		.addField('📥 Input:', `\`\`\`js\n${code}\`\`\``)
		.addField('📤 Output: ', `\`\`\`js\n${err}\`\`\``)
		message.channel.send(evalFail);
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