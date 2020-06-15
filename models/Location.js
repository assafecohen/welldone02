const mongoose = require("mongoose");

const LocationSchema = mongoose.Schema({
  name:{
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true,
  },
  category:{
    type:String,
    require: true,
  },
  cordinate:{
    type: Object,
    require: true
  }
});

module.exports = mongoose.model("location", LocationSchema);
