const connection = require('./connection')

const { spreadTableMatch } = require('./utils')

module.exports = {
  getJournalSpread,
  addSpread,
  addJournal,
  clearSpread
}

function getJournalSpread(db = connection) {
  return db('spreads')
    .select()
    .orderBy('spread_id', 'desc')
    .first()
}

function addSpread(spread, db = connection) {
  return db('spreads')
    .insert(spread)
    .then((id) => {
      return id
    })
}

function addJournal(id, journal, db = connection) {
  return db('spreads')
    .update({ journal: journal })
    .where('spread_id', id)
    .then((updated) => {return updated})
}

function clearSpread(id, db = connection) {
  console.log('here');
  return db ('spreads')
    .delete()
    .where('spread_id', id)
}
