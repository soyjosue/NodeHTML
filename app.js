const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.createReadStream('./pages/home.html').pipe(res);
});

app.get('/contact', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.createReadStream('./pages/contact.html').pipe(res);
})

app.get('/acerca', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.createReadStream('./pages/acerca.html').pipe(res);
})

const port = 3000;
app.listen(port, () => {
    console.log('Servidor Iniciado');
})