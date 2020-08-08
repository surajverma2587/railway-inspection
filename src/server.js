const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const htmlRoutes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes");

const PORT = process.env.PORT || 3000;
const app = express();

const DB_URI = process.env.MONGODB_URI || "mongodb://localhost/station";
const options = {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
};

mongoose.connect(DB_URI, options);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname + "/public")));
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});
