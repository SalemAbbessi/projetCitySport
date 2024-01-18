const express=require("express")
const router=express.Router();
const orderController=require("../controller/order.js");
const isAuth = require("../middlewares/isAuth.js");


router.post('/add/:user',isAuth,orderController.createOrder)
router.get('/',isAuth, orderController.getallOrders)
router.get('/:id',isAuth, orderController.getOrder);
router.delete('/:id', isAuth, orderController.deleteOrder);
router.put('/:id', isAuth, orderController.updateOrder);
module.exports = router