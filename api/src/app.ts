import dotenv from 'dotenv';
import express from 'express';
import init from './server';

if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}

const app = express();

init(app);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(('App is running at http://localhost:%d in %s mode'),
    app.get('port'), app.get('env'));
  console.log('Press CTRL-C to stop\n');
});
