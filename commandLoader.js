const Discord = require('discord.js')
module.exports = client => {
      client.cmds = new Discord.Collection();
      client.aliases = new Discord.Collection();
      const fs = require('fs')
            fs.readdir('./src/cmds/', (err, files) => {
       if(err) console.error(err);
       console.log(`${files.length} commands loaded.`);
       files.forEach(f => {
             const cmd = require(`./src/cmds/${f}`)
             client.cmds.set(cmd.info.name, cmd)
             cmd.info.aliases.forEach(alias => {
                   client.aliases.set(alias, cmd.info.name)
             })
       })
 })
}