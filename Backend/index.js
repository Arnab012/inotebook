const connectToMongo = require("./db");
const express = require("express");
var cors = require('cors')

connectToMongo();
const app = express();

const port = 5000;

// if you want to use requestAnimationFrame.body  we have to use middleware


app.use(cors())
app.use(express.json());
//here i use an middleware to requdt an body for thst code

// Avaliable routes

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Arnab's Classroom backend-- http://localhost:${port}`);
});

////for avoding the nodemon probelm you have to just replace the npm i mongoose with npm install mongoose@6.10.0
// thn you sysyteam and app will work finely
