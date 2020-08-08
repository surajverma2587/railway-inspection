const express = require("express");

const router = express.Router();

const homePage = (req, res) => {
  res.send("index.html");
};

router.get("/", homePage);

module.exports = router;
