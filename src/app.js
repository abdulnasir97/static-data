const express = require("express");
const app = express();

const users = require("./data/users-data");
const states = require("./data/states-data");


app.get("/users", (req, res) => {
  res.json({ data: users });
});


app.get("/users/:userId", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.userId));
  if (user) {
    res.json({ data: user });
  } else {
    res.status(404).send(`User ID not found: ${req.params.userId}`);
  }
});


app.get("/states", (req, res) => {
  res.json({ data: states });
});

// Route to get a single state by stateCode
app.get("/states/:stateCode", (req, res) => {
  const stateCode = req.params.stateCode;
  const stateName = states[stateCode];
  if (stateName) {
    res.json({ data: { stateCode: stateCode, name: stateName } });
  } else {
    res.status(404).send(`State code not found: ${stateCode}`);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal server error");
});

app.use((req, res, next) => {
res.send(`Not found: ${req.originalUrl}`)
});

module.exports = app;