const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const StationSchema = new Schema({
  stationName: {
    type: String,
    trim: true,
    required: "String is Required",
  },
  stationFacilities: {
    type: String,
    required: true,
  },
  stationRailways: {
    type: String,
    required: true,
  },
  stationTrainStorage: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Station = mongoose.model("Station", StationSchema);
module.exports = Station;
