/** Reference code: https://github.com/bpeddapudi/nodejs-basics-routes/blob/master/server.js
 * import express */
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const _ = require("lodash");

let carsMockData = [
  {
    id: "1",
    brand: "Hyundai",
    name: "Ioniq",
    releaseYear: 2017,
    color: "blue",
  },
  {
    id: "2",
    brand: "Toyota",
    name: "Prius",
    releaseYear: 2007,
    color: "blue",
  },
  {
    id: "3",
    brand: "Chevrolet",
    name: "Aveo",
    releaseYear: 2007,
    color: "white",
  },
  {
    id: "4",
    brand: "BMW",
    name: "M5",
    releaseYear: 2017,
    color: "White",
  },
  {
    id: "5",
    brand: "Tesla",
    name: "S",
    releaseYear: 2019,
    color: "Black",
  },
];

// TO SUPPORT CORS.
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

/** Create GET API. API shoudl return  const carsMockData*/
app.get("/", function (request, response) {
  response.send(`<h1 style="text-align:center">Cars Data</h1>`);
});

app.get("/cars-data", function (request, response) {
  response.send(carsMockData);
});

const server = app.listen(8081, function () {
  console.log(`App listening at http://127.0.0.1:8081/`);
});

// REST API to save car data to carsMockData
app.post("/save", (request, response) => {
  const carDataToAdd = request.body;
  let returnResponse = {};

  // Check if item already in the carsMockData
  carsMockData.map((car, indx) => {
    if (car.id === carDataToAdd.id) {
      // check if data already is in the carsMockData
      if (_.isEqual(car, carDataToAdd)) {
        returnResponse = { status: 500, message: "Car already exists" };
      } else {
        // Update existing carData
        carsMockData[indx] = carDataToAdd;
        returnResponse = {
          status: 200,
          message: "car updated",
          response: carsMockData,
        };
      }
    }
  });

  if (!carsMockData.some((carData) => carData.id === carDataToAdd.id)) {
    // Add car to the carsMockData
    carsMockData.push(carDataToAdd);
    returnResponse = {
      status: 200,
      message: "car added",
      response: carsMockData,
    };
  }

  response.json(returnResponse);
});

//
