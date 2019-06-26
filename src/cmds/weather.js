const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor, errors } = require('../settings.json');
const weather = require('weather-js')
exports.run = (client, message, paramaters) => {
const location = paramaters.join(" ")
var type = 'F'
if(!location) { 
      return message.channel.send(errors.MissingArgs)
} else if(location.toLowerCase().includes('-c')) { 
      type = 'C'
} else if(location.toLowerCase().includes('-f')) { 
      type = 'F'
} 
      

            weather.find({search: location, degreeType: type}, function(err, result) {
                  if(err) {
                         return message.channel.send('I could not find any data.')
                  }
                  try {
                  const weatherEmbed = new RichEmbed
                  weatherEmbed.setColor(EmbedColor)
                  weatherEmbed.setTitle(`Weather For: ${result[0].location.name}`)
                  weatherEmbed.addField('Temperature', `${result[0].current.temperature} ${type} (Feels Like ${result[0].current.feelslike} ${type})`, true)
                  weatherEmbed.addField('Forecast', `${result[0].current.skytext}`, true)
                  weatherEmbed.addField('Wind', `${result[0].current.winddisplay}`, true)
                  weatherEmbed.addField('Humidity', `${result[0].current.humidity}%`, true)
                  weatherEmbed.setFooter(`Date: ${result[0].current.date}`)
                  weatherEmbed.setThumbnail(result[0].current.imageUrl)
                  message.channel.send(weatherEmbed)
                  } catch(err) {
                        message.channel.send('I could not find any data.')
                  }
 
 
            })
  





}


exports.info = {
      name: 'weather',
      category: 'information',
      aliases: [],
      usage: 'weather \'location\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}