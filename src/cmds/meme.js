const { RichEmbed } = require('discord.js')
const { EmbedColor } = require('../settings.json');
const got = require('got')
exports.run = (client, message, paramaters) => {

    
      got('https://www.reddit.com/r/meme/random/.json').then(response => {
        let content = JSON.parse(response.body);
        var title = content[0].data.children[0].data.title;
        var image = content[0].data.children[0].data.url;
        const sent = new RichEmbed()
          .setTitle(title)
          .setImage(image)
          .setColor(EmbedColor)
        message.channel.send(sent)
        //msg.channel.send(image)
      }).catch(console.error);

}


exports.info = {
      name: 'meme',
      category: 'fun',
      aliases: [],
      usage: 'meme',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}