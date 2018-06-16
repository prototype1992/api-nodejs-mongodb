const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

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
    res.send(
        artists.find(item => item.id === parseInt(req.params.id))
    );
});

app.post('/artists', (req, res) => {
    let newArtist = {
        id: Date.now(),
        name: req.body.name
    };
    artists.push(newArtist);
    res.send(newArtist);
});

app.listen(5001, () => console.log('Listen port 5001'));
