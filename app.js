const express = require('express');
const router = require('./routes/index');

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use('/', router);

app.listen(3000, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('started successfully helo');
});