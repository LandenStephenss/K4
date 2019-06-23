const {
      prefix,
      errors
    } = require('../settings.json')
    module.exports = message => {
      const client = message.client;
      if (message.author.id === client.user.id || message.author.bot) return
      if (message.channel.type === 'dm') return



      const key = `${message.author.id}`
      client.prefix.ensure(message.guild.id, {prefix: '>'})
      client.points.ensure(key, {user: message.author.id, points: 0, level: 0, })
      const currentLevel = Math.floor(.09 * Math.sqrt(client.points.get(key, 'points')))
      client.points.set(key, {points: client.points.get(key).points + Math.floor(Math.random() * 8), level: currentLevel})
      if (!message.content.startsWith(client.prefix.get(message.guild.id).prefix)) return
      const command = message.content.split(" ")[0].slice(client.prefix.get(message.guild.id).prefix.length).toLowerCase()
      const params = message.content.split(" ").slice(1)
      if (client.cmds.has(client.aliases.get(command)) || client.cmds.has(command)) {
        var cmd = client.cmds.get(command) || client.cmds.get(client.aliases.get(command))
        var UserPerms = cmd.info.userPermissions
        var BotPerms = cmd.info.botPermissions
        if (!UserPerms.every(f => message.member.hasPermission(f))) {
          return message.channel.send(errors.UserPerm)
        }
        else if (!BotPerms.every(f => message.guild.me.hasPermission(f))) {
          return message.channel.send(errors.MissingPermission)
        } else if(cmd.info.category === 'developer' && message.author.id !== "546097012269907989") {
            message.channel.send('You cannot use **developer only** commands!')
        } else if(cmd.info.category === 'nsfw' && message.channel.nsfw === false) {
              message.channel.send('You cannot use **NSFW** commands in a non-NSFW channel!')
        }
        else {
          cmd.run(client, message, params)
          client.commandsUsed++
        }
      }
    }