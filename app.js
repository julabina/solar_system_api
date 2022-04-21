const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const sequelize = require('./src/db/sequelize');

const app = express();
const port = 3000;

/* sequelize.initDb(); */  
 
app
    .use(morgan('dev'))
    .use(bodyParser.json());


require('./src/routes/findAllPlanet')(app);
require('./src/routes/findOnePlanet')(app);
require('./src/routes/findAllMoon')(app);
require('./src/routes/findOneMoon')(app);
require('./src/routes/findAllSatellite')(app);
require('./src/routes/findOneSatellite')(app);
require('./src/routes/createNewSatellite')(app);
require('./src/routes/updateSatellite')(app);
require('./src/routes/deleteSatellite')(app);

app.use(({res}) => {
    const message = "La ressource n'a pas été trouvée";
    res.status(404).json({message});
})

app.listen(port, () => {
    console.log(`server start on : http://localhost:${port}`);
})