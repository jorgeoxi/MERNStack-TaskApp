const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const { mongoose } = require('./database');


// Settings
app.set('port', process.env.PORT || 3000); 
// Esta línea es para decirle a la applicación que utilice el puerto que le asigne el servicio que usamos en la nube o el puerto 3000 en caso de que podamos decidirlo

// Middlewares
app.use(morgan('dev'));
app.use(express.json());


// Routes
app.use('/api/tasks', require('./routes/task.routes'));


// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Starting Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

module.exports = app;