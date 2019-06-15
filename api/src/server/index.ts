import express, { Express } from 'express';
import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';

import { RegisterRoutes } from './routes/routes';
import swaggerJSON from './swagger/swagger.json';

// tsoa cli required imports
import controllers from './controllers'

function addSwagger(app: Express) {
  app.use('/swagger.json', express.static(__dirname + './swagger/swagger.json'));
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON));
}

function addBodyParser(app: Express) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
}

function init(app: Express) {
  addSwagger(app);
  addBodyParser(app);
  RegisterRoutes(app);
}

export default init;
