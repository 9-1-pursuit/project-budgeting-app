// DEPENDENCIES
const express = require("express");
let transactionsArray = require("./controllers/transactionController");
var cors = require('cors')

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors())
app.use(express.json()); // Parse incoming JSON
app.use("/transactions", transactionsArray);

// ROUTES
app.get("/", (req, res) => {
    res.send("welcome to the captain's transaction");
  });

  app.get("/transactions", )
  // 404 PAGE
  app.get("*", (req, res) => {
      res.json({ error: "Page not found" });
    });
  
  // EXPORT
  module.exports = app;