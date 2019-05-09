const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mobility', { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const mobilitySchema = mongoose.Schema({
  name: String,
  email: String,
  date: Date,
  results: Array
});

const Mobility = mongoose.model('Mobility', mobilitySchema);

const findResultAndUpdate = (data) => {
  const { name, email, date } = data;
  const conditions = { name, email, date };
  const options = {
    new: true,
    upsert: true,
    rawResult:true
  }
  return Mobility.findOneAndUpdate(conditions, data, options)
};

module.exports = {
  findResultAndUpdate
}