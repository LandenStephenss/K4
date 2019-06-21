const { Discord, RichEmbed } = require('discord.js')
const { EmbedColor } = require('../settings.json');
exports.run = (client, message, paramaters) => {
const time = 180000
const riddles = {
      "randomRiddles": [
        {
          "riddle": "It is greater than God and more evil than the devil. The poor have it, the rich need it and if you eat it you\u2019ll die. What is it?",
          "answer": "nothing"
        },
        {
          "riddle": "It walks on four legs in the morning, two legs at noon and three legs in the evening. What is it?",
          "answer": "man"
        },
        {
          "riddle": "I am the beginning of the end, and the end of time and space. I am essential to creation, and I surround every place. What am I?",
          "answer": "the letter e",
          "info": "End, timE, spacE, Every placE"
        },
        {
          "riddle": "What always runs but never walks, often murmurs, never talks, has a bed but never sleeps, has a mouth but never eats?",
          "answer": "a river"
        },
        {
          "riddle": "I never was, am always to be. No one ever saw me, nor ever will. And yet I am the confidence of all, To live and breath on this terrestrial ball. What am I?",
          "answer": "the future"
        },
        {
          "riddle": "At night they come without being fetched. By day they are lost without being stolen. What are they?",
          "answer": "the stars"
        },
        {
          "riddle": "What is in seasons, seconds, centuries and minutes but not in decades, years or days?",
          "answer": "n"
        },
        {
          "riddle": "The one who makes it, sells it. The one who buys it, never uses it. The one that uses it never knows that he\u2019s using it. What is it?",
          "answer": "a coffin"
        },
        {
          "riddle": "The more you have of it, the less you see. What is it?",
          "answer": "Darkness"
        },
        {
          "riddle": "What smells like purple paint, tastes like green paint, and can appear as a white dove?",
          "answer": "white paint"
        }
      ]}
const riddle = riddles.randomRiddles[Math.floor(Math.random() * riddles.randomRiddles.length)]
const answer = riddle.answer
message.channel.send(`__${riddle.riddle}__ Guess this riddle in 3 minutes and you win!`).then(f =>{
      const filter = m => m.content.toLowerCase() === answer;

message.channel.awaitMessages(filter, { max: 100, time: time, errors: ['time'] })
  .then(collected => console.log(collected.size))
  .catch(collected => message.channel.send(`**${collected.size}** people got the riddle right! The answer was **${answer}**.`));
})
}


exports.info = {
      name: 'riddle',
      category: 'fun',
      aliases: [],
      usage: 'riddle',
      botPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
      userPermissions: [],
}