const Discord = require('discord.js');
const client = new Discord.Client();
require('./src/util/eventLoader')(client);
require('./src/util/enmapLoad')(client)
require('./commandLoader')(client)
const { token, prefix, EmbedColor } = require('./src/settings.json');
client.login(token);

client.reload = command => {
      return new Promise((resolve, reject) => {
            try {
                  delete require.cache[require.resolve(`./src/cmds/${command}`)];
                  let cmd = require(`./src/cmds/${command}`);
                  client.cmds.delete(command);

                  client.cmds.set(command, cmd);

                  resolve();
            } catch (e){
                  reject(e);
            }
      });
};