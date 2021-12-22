const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const usersRoutes = require('./routes/users')

const app = express();

app.listen(3000, '127.0.0.1', () => {
    console.log('Słuchamy na http://localhost:3000')

});

app.use(express.json());
app.use(cookieParser());
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
usersRoutes(app)