const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conncted...');
  } catch (err) {
    console.log(err);
    proccess.exit(1);
  }
};

module.exports = connectDB;
