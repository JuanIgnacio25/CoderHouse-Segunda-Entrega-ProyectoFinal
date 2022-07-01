const express = require('express');
const app = express();
const imports = require('./daos/products/productsDaoMongoDB');
const routerProducts = imports.router;
const routerCart = require('./daos/cart/cartDaoMongoDB');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api/products', routerProducts);
app.use('/api/cart', routerCart);

app.listen(process.env.PORT || 8080, () => {
    console.log('Escuchando en el puerto 8080')
});