const {
	Discord,
	RichEmbed
    } = require('discord.js')
    const {
	EmbedColor
    } = require('../settings.json');
    exports.run = (client, message, paramaters) => {
	let region = message.guild.region
	if (region === "us-south") {
	  region = 'U.S South'
	}
	else if (region === 'us-east') {
	  region = 'U.S East'
	}
	else if (region === 'us-west') {
	  region = 'U.S West'
	}
	else if (region === 'us-central') {
	  region = 'U.S Central'
	}
	else if (region === 'brazil') {
	  region = 'Brazil'
	}
	else if (region === 'eu-central') {
	  region = 'Central Europe'
	}
	else if (region === 'hongkong') {
	  region = 'Hong Kong'
	}
	else if (region === 'india') {
	  region = 'India'
	}
	else if (region === 'japan') {
	  region = 'Japan'
	}
	else if (region === 'russia') {
	  region = 'Russia'
	}
	else if (region === 'singapore') {
	  region = 'Singapore'
	}
	else if (region === 'southafrica') {
	  region = 'South Africa'
	}
	else if (region === 'sydney') {
	  region = 'Sydney'
	}
	else if (region === 'eu-west') {
	  region = 'Western Europe'
	}
	let verification = message.guild.verificationLevel
	if (verification === 0) {
	  verification = 'None'
	}
	else if (verification === 1) {
	  verification = 'Must have a verified email'
	}
	else if (verification === 2) {
	  verification = 'Must be registered to Discord for more than 5 minutes'
	}
	else if (verification === 3) {
	  verification = 'Must be a member of the server for longer than 10 minutes'
	}
	else if (verification === 4) {
	  verification = 'Must have a phone linked with Discord'
	}
	let afkChannel = message.guild.afkChannel
	if (afkChannel === null) {
	  afkChannel = 'None'
	}
	else {
	  afkChannel = `<#${afkChannel.id}>`
	}
    
	function checkDays(date) {
	  let now = new Date();
	  let diff = now.getTime() - date.getTime();
	  let days = Math.floor(diff / 86400000);
	  return days + (days == 1 ? " day" : " days") + " ago";
	};
	const embed = new RichEmbed().setColor(EmbedColor).setAuthor(message.guild.name, message.guild.iconURL).addField("User Count!", `${message.guild.members.size} Users`, true).addField("Channel Count!", `${message.guild.channels.size} channels`, true).addField("Roles", `${message.guild.roles.size}`, true).addField("Owner", `${message.guild.owner.user.tag}`, true).addField("Region", `${region}`, true).addField("Verification", `${verification}`, true).addField("Server ID", `${message.guild.id}`, true).addField("AFK Channel", `${afkChannel}`, true).setThumbnail(message.guild.iconURL).setFooter(`Created On ${message.guild.createdAt.toLocaleString().split(",")[0]} (${checkDays(message.guild.createdAt)})`);
	message.channel.send({
	  embed
	});
    }
    exports.info = {
	name: 'guildinfo',
	category: 'information',
	aliases: ['serverinfo'],
	usage: 'guildinfo',
	botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
	userPermissions: [],
    }