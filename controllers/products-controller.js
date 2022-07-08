const express = require('express');
const router = express.Router();
const productsDal = require('products-dal');

router.get('/', async (request, response) => {
try{
  let allProducts = await productsDal.getAllProducts();
  response.send(allProducts);
} catch {
  response.sendStatus(500);
}
});