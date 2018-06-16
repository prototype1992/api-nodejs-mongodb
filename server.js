const express = require('express');

const app = express();

let artists = [
    {
        id: 1,
        name: 'Metallice'
    },
    {
        id: 2,
        name: 'Iron Maiden'
    },
    {
        id: 3,
        name: 'Deep Perple'
    }
];

app.get('/', (req, res) => {
    res.send('Hello API');
});

app.get('/artists', (req, res) => {
    res.send(artists);
});

app.listen(5001, () => console.log('Listen port 5001'));
