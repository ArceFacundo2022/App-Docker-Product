const router = require('express').Router()

const {postProduct, getProduct} = require('../controllers/product.controllers')

router.post("/product",postProduct)
router.get("/product", getProduct)

module.exports = router