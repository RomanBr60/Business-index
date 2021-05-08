const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const express = require('express');
const register = require('@react-ssr/express/register');
const cors = require('cors')
const app = express();

const index = require('./routes.js');

(async () => {
  await register(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx'); 


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));
  
/*app.get('/', (req, res) => {
  const user = { name: 'Custom App' };
  res.render('index', { user });
});*/

app.use('/', index);

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

})();


module.exports = app;