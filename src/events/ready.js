module.exports = client => {
      client.commandsUsed = 0
      console.log(`I'm now online. Serving ${client.users.size} users in ${client.guilds.size} guilds.`)
     
      client.user.setActivity(`${client.users.size} Users`, { type: 'WATCHING' })
      setInterval(function() {
            client.guilds.get('592100762826309673').channels.get("592104987816099890").setName(`Users: ${client.users.size}`)
            client.user.setActivity(`${client.users.size} Users`, { type: 'WATCHING' })
      }, 10000)

}