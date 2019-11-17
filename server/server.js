const express = require ("express");
const bodyParser 	= 	require('body-parser');

const app = express();

const PORT = 5000;

const navigate = require('./navigate/route');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', navigate);


app.listen(PORT, (err) => {
    if (err) return console.log(`Server not started ${err}`);
    console.log(`Server Created Successfully at port ${PORT}`);
});