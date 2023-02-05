const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const db = require("./models");

db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.json({
        message: "Hello world!!"
    });
});

require("./routers/product.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});