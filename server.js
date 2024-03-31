const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002; // Use port 3001 or the one specified in environment variable

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 + num2;
        res.status(200).send({ result: "Result: " + result });
    } else {
        res.status(400).send({ error: "Invalid numbers provided" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
