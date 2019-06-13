const express = require('express');

const app = express();
const hbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 3000;
const routes = require('./routes/');

module.exports = () => {
  /* Settings */
  app
    .set('port', PORT)
    .engine(
      'hbs',
      hbs({
        extname: 'hbs',
        defaultLayout: 'default',
        partialsDir: path.join(__dirname, 'views', 'partials'),
      }),
    )
    .set('view engine', 'hbs')
    .set('views', path.join(__dirname, 'views'));
  /* Static Files */
  app.use(express.static(path.join(__dirname, '../public')));
  /* Routes */
  routes(app);
  /* Start App */
  app.listen(app.get('port'), () => {
    process.stdout.write(`Application running at: http://localhost:${app.get('port')}`);
  });
};
