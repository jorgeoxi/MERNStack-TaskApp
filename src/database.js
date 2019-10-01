const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mern-tasks';

// En esta parte se coloca la url de la base de datos montada en algún servicio en la nube, sino colocas la configuracion de manera local
mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;