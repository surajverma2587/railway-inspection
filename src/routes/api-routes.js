const express = require("express");
const db = require("../models");

const router = express.Router();

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
router.post("/station", addStation);
module.exports = router;
