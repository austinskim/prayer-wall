import * as express from 'express';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import * as swaggerUI from 'swagger-ui-express';

import { RegisterRoutes } from './routes/routes';
import * as swaggerJSON from './swagger/swagger.json';

if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/swagger.json', express.static(__dirname + './swagger/swagger.json'));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON));

RegisterRoutes(app);

app.listen(app.get('port'), () => {
  console.log(('App is running at http://localhost:%d in %s mode'),
    app.get('port'), app.get('env'));
  console.log('Press CTRL-C to stop\n');
});

export default app;
