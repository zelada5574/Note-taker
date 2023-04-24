const express = require('express');
const fs =require('fs')
const database = require(`./db/db.json`)

const app = express();

app.use(express.static("public"))

const PORT = process.env.PORT || 3001;

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get(`/api/notes`, (req,res) => {
res.json(database)
});

app.post(`/api/notes`, (req,res) =>{

database.push(req.body)
fs.writeFile(`./db/db.json`, JSON.stringify(database, null, 2), (err) => {
if(err) {
        console.log('Error', err);
        }})
res.json(req.body)
});

app.listen(PORT, () => console.log(`Server started on PORT http://localhost:${PORT}`))

