const express = require('express');
const lego = require('./lego.json'); //Copia il file people.json dentro la variabile people
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Homepage',
    lego: lego.lego //Passa il vettore profiles alla pagina index.pug
  });
});

app.get('/profile', (req, res) => {
  const l2 = lego.lego.find(p => p.id == req.query.id);
  console.log(l2);
  res.render('profile', {
    title: `Istruzioni ${l2.setName}`,
    l2,
  });
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});