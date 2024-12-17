1. First install all packages:

```bash
npm install swagger-autogen swagger-jsdoc swagger-ui-express
```

2. Create a new file `swagger.js` and add the following code: change localhost:3000 to your server address and routes to your routes file.

```javascript
const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "API Documentation",
    description: "API documentation Functions",
  },
  host: "localhost:3000",
};

const outputFile = "./swagger-output.json";
const routes = ["./index.js"];

swaggerAutogen(outputFile, routes, doc);
```

3. Run the file `swagger.js`:

```bash
node swagger.js
```

4. Now add swagger to your `index.js` file:

```javascript
// Swagger For API Documentation
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```

5. Now run your server and go to `localhost:3000/api-docs` to see the API documentation.
