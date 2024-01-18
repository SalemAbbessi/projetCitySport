const express=require("express")
const router=express.Router();
const productController=require("../controller/product.js");
const isAuth = require("../middlewares/isAuth.js");

router.get('/',isAuth, productController.getallProducts)
router.post('/add',isAuth, productController.creatProduct)
router.get('/:id',isAuth, productController.getProduct);
router.delete('/:id',isAuth, productController.deleteProduct);
router.put('/:id',isAuth, productController.updateProduct);


module.exports = router