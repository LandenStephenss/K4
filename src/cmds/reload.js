const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor, errors } = require('../settings.json');
exports.run = (client, message, paramaters) => {



      if(!paramaters[0]) return message.channel.send(errors.MissingArgs)
      let command;
      if (client.cmds.has(paramaters[0])) {
        command = paramaters[0];
      } 
      const botLog = client.guilds.get("592100762826309673").channels.get("592116762657685525")
      if (!client.cmds.has(command)) {
        return message.channel.send(`I cannot find the command: **${paramaters[0]}**`); // This is ran if there is no command by that name
      } else {
        message.channel.send(`Reloading: ${command}`)
          .then(m => {
            client.reload(command)
              .then(() => {
                m.edit(`Successfully reloaded: ${command}`);
                const Reloaded = new RichEmbed()
                .setTitle('Reloaded ' + command)
                .setColor(EmbedColor)
                botLog.send(Reloaded)
                console.log(`Reloaded ${command}`)
              })
              .catch(e => {
                m.edit(`Command reload failed: ${command}\n\`\`\`${e.stack}\`\`\``);
                console.error(`Failed to reload ${command}`)
              });
          })
  
      
  };


}


exports.info = {
      name: 'reload',
      category: 'developer',
      aliases: ['re'],
      usage: 'reload \'command\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}