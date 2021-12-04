const express = require('express');

const app = express();

app.listen(3000, '127.0.0.1', () => {
    console.log('Słuchamy na http://localhost:3000')

});

// app.get('/', (req) => {
//     console.log(req.hostname)
//     console.log(req.ip)
//     console.log(req.ips)
//     console.log(req.method);
//     console.log(req.url)
//     console.log(req.originalUrl)
//     console.log(req.path)
//     console.log(req.protocol)
//     console.log(req.secure)
//     console.log(req.params)
//     console.log(req.query)

//     const {name, surname} = req.query

//     console.log("ELp: " + name)
// });
app.get('/:id', (req, res) => {
    console.log('Szczrgół o osobie id: ' + req.params.id)

   // res.send('Hello World: ' + req.params.id)
   //res.location('localhot:3000')
   res.redirect('https://www.google.pl')
   //res.sendStatus(302);
});


app.get('/', (req, res) => {
    console.log('spis ludzi')

    res.write('Hello World')
    res.end();
    
});

app.post('/', (req) => {
    console.log('Dodawanie nowej osoby')

})

app.patch('/:id', (req) => {
    console.log('Aktualizacja osoby id: ' + req.params.id)

})

app.delete('/:id', (req) => {
    console.log('Usuwanie osoby o id: ' + req.params.id)

})