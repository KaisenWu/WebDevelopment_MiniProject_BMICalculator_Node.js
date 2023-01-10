// Declare the express packege.
const express = require("express");
// Declare the bpdy-parser packege.
const bodyParser = require("body-parser");
// Declare the server.
const server = express();

// Store the html string.
const htmlStrPre =
  '<link rel="stylesheet" href="bmi.css">' +
  "<!DOCTYPE html>" +
  '<html lang="en">' +
  "<head>" +
  '<link rel="stylesheet" href="bmi.css">' +
  '<link rel="stylesheet" href="bmi.css">' +
  '<link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">' +
  '<meta charset="UTF-8">' +
  '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
  '<meta http-equiv="X-UA-Compatible" content="ie=edge">' +
  "<title>BMI checker</title>" +
  "</head>" +
  "<body>" +
  '<div class="header">' +
  '<div class="wrapper">' +
  '<form action="/" method="post">' +
  "<h1>BMI calculator</h1>" +
  "<p>Insert Your Age</p>" +
  '<input type="text" id="age" name="age">' +
  "<p>Insert Weight in Kg</p>" +
  '<input type="text" id="weight" name="weight">' +
  "<br>" +
  "<p>Insert Height in cm</p>" +
  '<input type="text" id="height" name="height">' +
  "<br>" +
  '<button id="calc">check</button>' +
  '<p id="result">';

htmlStrPost = "</p> </form> </div> </div> </body> </html>";

// Define what packege the server will
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static("public"));

// Define the page content without posting.
server.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmi.html");
});

// Define the post action.
server.post("/", function (req, res) {
  const age = Number(req.body.age);
  const weight = Number(req.body.weight);
  const height = Number(req.body.height) / 100;
  const result = (weight / (height * height)).toFixed(2);
  resultStr = "Your BMI Result is: " + result;
  res.send(htmlStrPre + "<strong>" + resultStr + "<strong>" + htmlStrPost);
});

// Define the port number.
server.listen(3000, function (err) {
  if (err) {
    console.log("Something wrong with the server.");
  } else {
    console.log("The server is listening port 3000.");
  }
});
