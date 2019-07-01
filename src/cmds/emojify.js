const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor } = require('../settings.json');
exports.run = (client, message, paramaters) => {

      function makeBoxLetter(word) {
            const boxWords = []
            word.split("").forEach(f => {
            if(f === ' ') {
            boxWords.push('   ')
            } else if(isNaN(f) === false) {
                  if(f === '0') {
                        boxWords.push(':zero:')
                  } else  if(f === '1') {
                        boxWords.push(':one:')
                  } else  if(f === '2') {
                        boxWords.push(':two:')
                  } else  if(f === '3') {
                        boxWords.push(':three:')
                  } else  if(f === '4') {
                        boxWords.push(':four:')
                  } else  if(f === '5') {
                        boxWords.push(':five:')
                  } else  if(f === '6') {
                        boxWords.push(':six:')
                  } else  if(f === '7') {
                        boxWords.push(':seven:')
                  } else  if(f === '8') {
                        boxWords.push(':eight:')
                  } else  if(f === '9') {
                        boxWords.push(':nine:')
                  }
            } else {
            boxWords.push(`:regional_indicator_${f}:`)
            }
            })
            return boxWords.join("")
            }


            message.channel.send(makeBoxLetter(paramaters.join(" ")))

}


exports.info = {
      name: 'emojify',
      category: 'fun',
      aliases: ['fancy', 'fancytext'],
      usage: 'emojify \'text\'',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}