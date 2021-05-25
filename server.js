const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Proxy port
const PORT = process.env.PORT || 3001;

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Register API router
app.use(require("./routes"));

//Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});