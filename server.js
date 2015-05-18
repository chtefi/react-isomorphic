import express from 'express';
import fs from 'fs';
import React from 'react';
import App from './public/App';
import Chance from 'chance';
const chance = Chance();

const app = express();
const payload = {
	name: 'Isomeuphirc',
	people: [...Array(100)].map(() => { return { name: chance.name() } })
};

let html = fs.readFileSync('public/index.html').toString()
	.replace('{{APP}}', React.renderToString(<App {...payload} />))
	.replace('{{PAYLOAD}}', JSON.stringify(payload));

app.use('/public', express.static('public'));
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');    
    res.send(html);
})

app.listen(3000, function() { console.log('Server listening on port', this.address().port); });

