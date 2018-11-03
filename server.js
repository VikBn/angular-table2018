const express = require('express');
const path = require('path');

const app = express();

const port = process.env.Port || 3001;

app.use(express.static(__dirname + '/dist/ng-table'));

app.get('*', (req,res) => res.sendFile(path.join(__dirname + '/distng-table/index.html')));

app.listen(process.env.PORT || 8080);
