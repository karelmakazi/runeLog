const config = require('../knexfile').development
const db = require('knex')(config)

module.exports = {
  getJournalSpread,
  addSpread
}

function getJournalSpread(){
  return db('spreads')
  .select()
  .orderBy('timestamp', 'desc')
  .limit(1)
  .first()
  .then(res => { return res})
  .catch(err => (console.log(err)))
}

function addSpread (spread) {
  return db('spreads')
  .insert({
    pos1_rune: spread.pos1_rune,
    pos1_aspect: spread.pos1_aspect,
    pos1_image: spread.pos1_image,
    pos2_rune: spread.pos2_rune,
    pos2_aspect: spread.pos2_aspect,
    pos2_image: spread.pos1_image,
    pos3_rune: spread.pos3_rune,
    pos3_aspect: spread.pos3_aspect,
    pos3_image: spread.pos3_image,
    journal: 'empty',
  })
  .then(id => {return id})
  .catch(err => (console.log(err)))
}