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

app.get('/artists/:id', (req, res) => {
    let artist = artists.find(item => item.id === parseInt(req.params.id))
    res.send(artist);
});

app.listen(5001, () => console.log('Listen port 5001'));
