const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello API');
});

app.listen(5001, () => console.log('Listen port 5001'));
