const express = require('express');
const cors = require('cors');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon')

const app = express();

require('dotenv').config();
require('./config/database');

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use(favicon(path.join(__dirname, '../build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '../build')));

// app.use("/api/profiles", require("./routes/api/profiles"));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

const port = process.env.PORT || 3001;


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});