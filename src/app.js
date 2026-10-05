const express = require("express");
const connectDB = require("./config/db.connect");

const app = express();
connectDB();


module.exports = app;