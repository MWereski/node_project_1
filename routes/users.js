function usersRoutes(app){
    app.post('/hello', (req, res) => {
        const {name, surname} = req.body;
        console.log(name, surname)
        res.send('Witaj ' + name + ' ' + surname)
    
    })
    
    app.get('/hi/:name', (req, res) => {
        const {name} = req.params;
        const dt = new Date();
        dt.setDate(dt.getDate() + 7);
    
        res.cookie('visitor_name', name, {
            expires: dt,
        });
    
        res.send('Imię zapisano.')
    
    });
    
    app.get('/logout', (req, res) => {
        res.clearCookie('visitor_name');
    
        res.redirect('/')
    
    })
    
    
    app.get('/', (req, res) => {
    
        res.send('Strona główna');
    
        // const fileName = 'elo.html';
        // res.sendFile(fileName, {
        //     root: path.join(__dirname, 'front')
        // });
        
    });
    
    app.get('/logo', (req, res) => {
        
    
        const fileName = path.join(__dirname, 'front/unnamed.jpg');
        // res.sendFile(fileName, {
        //     root: path.join(__dirname, 'front')
        // });
    
        res.download(fileName, 'ELOPLIKKO');
    
        
    });
    
    app.post('/', (req) => {
        console.log('Dodawanie nowej osoby')
    
    })
    
    app.get('/:id', (req, res) => {
        console.log('Szczrgół o osobie id: ' + req.params.id)
    
       // res.send('Hello World: ' + req.params.id)
       //res.location('localhot:3000')
       res.redirect('https://www.google.pl')
       //res.sendStatus(302);
    });
    
    app.patch('/:id', (req) => {
        console.log('Aktualizacja osoby id: ' + req.params.id)
    
    })
    
    app.delete('/:id', (req) => {
        console.log('Usuwanie osoby o id: ' + req.params.id)
    
    })
}

module.exports = usersRoutes;