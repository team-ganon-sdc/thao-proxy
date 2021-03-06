require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '/../public')));

app.listen(port, () => console.log(`Proxy server running on port ${port}!`));