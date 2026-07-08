const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hallo aus meinem ersten Node-Server!');
});

app.get('/api/books', (req, res) => {
  res.json([{ title: "Testbuch", author: "Max Muster" }]);
});

app.listen(3000, () => console.log('Server läuft auf Port 3000'));
