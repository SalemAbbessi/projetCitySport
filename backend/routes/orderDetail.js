const express=require("express")
const router=express.Router();
const orderDetailController=require("../controller/orderDetail.js");
const isAuth = require("../middlewares/isAuth.js");

router.post("/add/:order/:product",isAuth, orderDetailController.createOrderDetail)
router.get('/',isAuth, orderDetailController.getallOrderDetails)
router.get('/:id',isAuth, orderDetailController.getOrderDetail);
router.delete('/:id',isAuth, orderDetailController.deleteOrderDetail);
router.put('/:id',isAuth, orderDetailController.updateOrderDetail);
module.exports = router