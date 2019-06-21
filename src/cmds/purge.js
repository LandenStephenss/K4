exports.run = async (client, message, paramaters) => {

      const amount = paramaters[0]
            if(!amount) {
		message.channel.send(client.settings.err.NoArgs)
	} else if(parseInt(amount) > 100 || parseInt(amount) < 1) {
		message.channel.send(`Please select a number between 1 and 100`)
	} else {
		await message.delete()
		await message.channel.bulkDelete(parseInt(amount))
	}

}


exports.info = {
      name: 'purge',
      category: 'moderation',
      aliases: ['clear', 'bulkdelete'],
      usage: 'purge \'amount\'',
      botPermissions: ['MANAGE_MESSAGES', 'SEND_MESSAGES'],
      userPermissions: ['MANAGE_MESSAGES'],
}