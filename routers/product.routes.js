module.exports = app => {
    const products = require("../controllers/product.controller");

    var router = require("express").Router();

    // Create a new Product
    router.post("/", products.create);
    router.get("/", products.list);

    app.use('/api/products', router);
};