const express = require('express');

const routes = express.Router();
const respon = require('./Helpers/respon');
const product = require('./Routes/products');
const category = require('./Routes/category');
const search = require('./Routes/search');
const history = require('./Routes/history');
const users = require('./Routes/users');
const auth = require('./Routes/auth');
const { configCloud } = require('./Configs/cloudinary');

routes.use('/inyil/api/product', configCloud, product);
routes.use('/inyil/api/category', category);
routes.use('/inyil/api/search', search);
routes.use('/inyil/api/history', history);
routes.use('/inyil/api/users', users);
routes.use('/inyil/api/auth', auth);
routes.use('*', (req, res) => respon(res, 209, { msg: 'Not Found' }));

module.exports = routes;
