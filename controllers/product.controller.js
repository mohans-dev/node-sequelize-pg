const db = require("../models");
const Product = db.products;

exports.create = (req, res) => {
    // Validate request
    
    if (!req.body.name && !req.body.price) {
        res.status(400).send({
            message: "Name&&Price can not be empty!"
        });
        return;
    }

    // Create a Product
    const product = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    };

    // Save Product in the database
    Product.create(product)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Product."
            });
        });
};

exports.list = (req, res) => {
    // Validate request

    // Save Product in the database
    Product.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Product."
            });
        });
};
