const OrderDetail=require("../models/orderDetail.js")

exports.createOrderDetail = async (req, res) => {
    try {
     const {unit_price,total_price}=req.body
     const order=req.params.order
     const product=req.params.product
     const newOrderDetail =  new OrderDetail({unit_price,total_price,order,product});
     await newOrderDetail.save();
     return res.status(201).json({
      payload:newOrderDetail
     })
      
    } catch (error) {
      console.error(error);
      res.status(500).
        json({
          message: "Error in creatOrderDetail",
        });
    }
  };
   exports.getallOrderDetails = async (req, res) => {
    try {
  
      const orderDetails = await OrderDetail.find()
      return res.status(200).json({
          payload:orderDetails
      });
  
    } catch (error) {
      console.error(error);
      res.status(500),
        json({
          message: "Error in getallOrderDetails",
        });
    }
  };

  exports.getOrderDetail = async (req, res) => {
    try {
      const orderDetailId=req.params.id;
      const orderDetail=await OrderDetail.findOne({_id : orderDetailId});
      if (!orderDetail) {
        return res.status(404).json({ message: 'orderdetail not found' });
      }
     return  res.status(200).json(orderDetail)
    } catch (error) {
      console.error(error);
      res.status(500).
        json({
          message: "Error in readorderdeetail",
        });
    }
  };
  exports.deleteOrderDetail = async (req, res) => {
    try {
      const orderDetailId=req.params.id;
     const orderDetail=await OrderDetail.deleteOne({_id : orderDetailId})
     return res.status(200).json({ message: 'orderDetail deleted' });
    
  
    } catch (error) {
      console.error(error);
      res.status(500),
        json({
          message: "Error in deleteorderDetail",
        });
    }
  };


  exports.updateOrderDetail= async (req, res) => {
    try {
      const orderDetailId=req.params.id;
      const orderDetail=await OrderDetail.findOneAndUpdate({_id : orderDetailId},req.body,{new:true})
  if(!orderDetail){
    return res.status(404).json({message:'orderdetail not found'})
  }
  return res.status(200).json(orderDetail)
  
    } catch (error) {
      console.error(error);
      res.status(500),
        json({
          message: "Error in updateorderdetail",
        });
    }
  };