const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json())
app.use(cors());
app.use(routes)

mongoose
  .connect(
    "mongodb+srv://yashhh:puX0Tz2jM65KjvnZ@cluster0.0ktinyn.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(3000);
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });