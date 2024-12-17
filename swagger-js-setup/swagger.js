const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "API Documentation",
    description: "API documentation Functions",
  },
  host: "localhost:3000",
};

const outputFile = "./swagger-output.json";
const routes = ["../server.js"];

swaggerAutogen(outputFile, routes, doc);