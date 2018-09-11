
const express = require('express');
const app     = express();
const PORT    =  process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Pizza Express!')
})

app.get('/topping/:type', function(req, res, next) {
    res.send(`${req.params.type} pizza! Good choice!`);
});

app.get('/order/:amount/:size', function(req, res, next) {
    res.send(`Your order of ${req.params.amount} ${req.params.size} pizzas will be ready in 1 minute!`);
});




app.listen(PORT, function(){
  console.log("==========================")
  console.log(`LISTENING ON PORT ${PORT}`);
  console.log("==========================")
});

