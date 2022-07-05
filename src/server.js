const express = require('express');
const app = express();
const imports = require('./daos/products/productsDaoMongoDB');
const routerProductsMongo = imports.router;
const routerCartMongo = require('./daos/cart/cartDaoMongoDB');
const imports2 = require('./daos/products/productsDaoFireBase')
const routerProductsFB = imports2.router;
const routerCartFB = require('./daos/cart/cartDaoFireBase')
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api/products', routerProductsMongo);
app.use('/api/cart', routerCartMongo);

app.listen(process.env.PORT || 8080, () => {
    console.log('Escuchando en el puerto 8080')
});