const express = require ('express');
const bodyParser = require ('body-parser');
const port = 3000;

const app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req,res)=>{
    res.send('You are in!');
});
require('./app/controllers/index')(app);

app.listen(port, ()=>{
    console.log("Sever is Running at http://localhost:" + port);
});