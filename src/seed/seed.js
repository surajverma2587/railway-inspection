const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/station", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const TrainData = [
  {
    stationName: "Manchester",
    stationFacilities: "Bad",
    stationRailways: "Bad",
    stationTrainStorage: "Bad",
    updatedAt: Date.now,
  },
  {
    stationName: "London",
    stationFacilities: "Good",
    stationRailways: "Good",
    stationTrainStorage: "Good",
    updatedAt: Date.now,
  },
  {
    stationName: "Liverpool",
    stationFacilities: "Bad",
    stationRailways: "Bad",
    stationTrainStorage: "Good",
    updatedAt: Date.now,
  },
];
db.Station.deleteMany({}).then(() => {
  console.log("All seed data delete success");
  db.Station.collection
    .insertMany(TrainData)
    .then((data) => {
      console.log(data.result.n + " Stations added");
      process.exit(0);
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
});
