const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("App listening on port: " + port);
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/add', (req, res) => {
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    let result = parseInt(num1) + parseInt(num2);
    let response = {Sum:result, message:'sucess'}
    res.json(response);




 
});
