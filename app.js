const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app
    .use(morgan('dev'))
    .use(bodyParser.json())


app.listen(port, () => {
    console.log('server start on : http://localhost:3000');
})