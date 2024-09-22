const express = require('express');

const app = express();

const port = 3000;

app.get('/',(req, res)=>{
    res.send('This is my first project')
});


app.listen(port,()=>{
    console.log(`my project run on port no ${port}`)
});

