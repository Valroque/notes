const express = require('express');
const app = express();
const App = require('./components/App');

app.get('/', App);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
