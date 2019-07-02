const enmap = require('enmap')
module.exports = client => {
client.points = new enmap({name: 'points'})
client.Currency = new enmap({name: 'currency'})
client.DickSize = new enmap({name: 'DickSize'})
client.howgay = new enmap({name: 'howgay'})
client.RPSWins = new enmap({name: 'RPSWins'})
client.prefix = new enmap({name: 'prefix'})
client.Bank = new enmap({name: 'bank'})
}