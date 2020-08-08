const express = require("express");
const db = require("../models");
const mongoose = require("mongoose");

const router = express.Router();

const getAllStations = async (req, res) => {
  const response = await db.Station.find({});
  res.send(response);
};
const getStationById = async (req, res) => {
  const id = mongoose.Schema.Types.ObjectId(req.params.id);
  console.log(id);

  const response = await db.Station.findById(id).exec();
  console.log(response);
  res.send(response);
};
const addStation = async (req, res) => {
  const {
    stationName,
    stationFacilities,
    stationRailways,
    stationTrainStorage,
  } = req.body;
  //db.Station.collection.insertOne({ ...data });
  try {
    const response = await db.Station.collection.insertOne({
      stationName,
      stationFacilities,
      stationRailways,
      stationTrainStorage,
      updatedAt: Date.now(),
    });
    console.log(response);
    res.status(201).send({
      message: "Station adding successful",
    });
  } catch (error) {
    console.log(`Something happened on the server: ${error.message}`);
    res.status(500).send(error.message);
  }
};

const updateStation = (req, res) => {
  const id = req.params.id;
  db.Station.updateOne({ _id });
};
const deleteStation = (req, res) => {
  const id = req.params.id;
  db.Station.deleteOne({ _id });
};

router.get("/station", getAllStations);
router.post("/station", addStation);
router.get("/station/:id", getStationById);
router.put("/station/:id", updateStation);
router.delete("/station/:id", deleteStation);

module.exports = router;
