
const express = require('express');
const app     = express();
const PORT    =  process.env.PORT || 3000;

var hbs = require('hbs');

app.set("view engine", "hbs");

app.get('/', (req, res) => {
    res.render('index', {message: 'Welcome to Pizza Express!'})
})

app.get('/toppings/:type', function(req, res, next) {
    res.render('toppings', {x: req.params.type});
});

app.get('/order/:amount/:size', function(req, res, next) {
    res.render('order',  {y: req.params.amount, z: req.params.size})

})


app.listen(PORT, function(){
  console.log("==========================")
  console.log(`LISTENING ON PORT ${PORT}`);
  console.log("==========================")
});
