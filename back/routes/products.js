const express = require("express");

//crear un enrutador...
const router = express.Router();

//traer la respuesta json desde el controller
const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controller/productController");

//establecer la ruta URL donde se va a ver el getProducts
router.route('/products').get(getProducts);

//generar ruta nueva para la creación de productos:...
router.route('/products/new').post(newProduct);

//generar ruta para el getby ID:
router.route('/products/:id').get(getProductById);

//generar ruta para el update/put:
router.route('/products/:id').put(updateProduct);

//generar ruta para el delete:
router.route('/products/:id').delete(deleteProduct);

//exportar
module.exports = router;