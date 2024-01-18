const express=require("express")
const router=express.Router();
const shopController=require("../controller/shop.js");
const isAuth = require("../middlewares/isAuth.js");

router.post("/add/:user/:product",isAuth, shopController.creatShop)
router.get('/',isAuth, shopController.getallShops)
router.get('/:id',isAuth, shopController.getShop);
router.delete('/:id',isAuth, shopController.deleteShop);
router.put('/:id',isAuth, shopController.updateShop);
module.exports = router