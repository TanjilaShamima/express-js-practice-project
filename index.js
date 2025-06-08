const express = require("express");
// This is a simple Express.js application that listens for GET and POST requests

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.use(
  express.static(`${__dirname}/public`, {
    index: "home.html",
  })
); // Serve static files from the 'public' directory

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log("Received a POST request", req.body);
  res.send("This is a POST request!" + req.body);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
