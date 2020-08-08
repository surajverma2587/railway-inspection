const express = require("express");

const router = express.Router();

const homePage = (req, res) => {
  res.sendFile("index.html");
};

const stationsPage = (req, res) => {
  res.sendFile("stations.html");
};

router.get("/", homePage);
router.get("/stations", stationsPage);

module.exports = router;
