require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const tradesRoutes = require("./routes/trades");

// express app
const app = express();

// Middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/trades", tradesRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to db & listening on port",
        process.env.PORT || 4000
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
