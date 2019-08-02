const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./openapi.json');

var options = {
  explorer: true
};

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
app.listen(3000, () => console.log('App started'))

