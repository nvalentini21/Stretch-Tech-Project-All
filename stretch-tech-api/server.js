const express = require('express');
const app = express();

import birdInfo from ('./data.js')

app.use(express.json());

app.set('port', process.env.PORT || 3000)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))
