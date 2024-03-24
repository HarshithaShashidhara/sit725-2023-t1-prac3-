var express = require("express");
var app = express();
var port = process.env.PORT || 3001;


app.use(express.static(__dirname + '/'));


app.get('/add', (req, res) => {
   
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
 
    if (!isNaN(num1) && !isNaN(num2)) {
      
        const result = num1 + num2;
        res.status(200).send({ result: "Result"+ result }); 
    } else {
        res.status(400).send({ error: "Invalid numbers provided" }); 
    }
});


app.listen(port, () => {
    console.log("App is running on port " + port);
});
