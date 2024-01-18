const Order=require("../models/order.js")

exports.createOrder = async (req, res) => {
    try {
     const {ordre_product}=req.body
     const user=req.params.user
     const newOrder =  new Order({ordre_product,user});
     await newOrder.save();
     return res.status(201).json({
      payload:newOrder
     })
      
    } catch (error) {
      console.error(error);
      res.status(500).
        json({
          message: "Error in creatOrder",
        });
    }
  };
  exports.getallOrders = async (req, res) => {
    try {
  
      const orders = await Order.find()
      return res.status(200).json({
          payload:orders
      });
  
    } catch (error) {
      console.error(error);
      res.status(500),
        json({
          message: "Error in getallOrders",
        });
    }
  };

  exports.getOrder = async (req, res) => {
    try {
      const orderId=req.params.id;
      const order=await Order.findOne({_id : orderId});
      if (!order) {
        return res.status(404).json({ message: 'order not found' });
      }
     return  res.status(200).json(order)
    } catch (error) {
      console.error(error);
      res.status(500),
        json({
          message: "Error in readorder",
        });
    }
  };
  exports.deleteOrder = async (req, res) => {
    try {
      const orderId=req.params.id;
     const order=await Order.deleteOne({_id : orderId})
     return res.status(200).json({ message: 'order deleted' });
    
  
    } catch (error) {
      console.error(error);
      res.status(500),
        json({
          message: "Error in deleteorder",
        });
    }
  };
  exports.updateOrder= async (req, res) => {
    try {
      const orderId=req.params.id;
      const order=await Order.findOneAndUpdate({_id : orderId},req.body,{new:true})
  if(!order){
    return res.status(404).json({message:'order not found'})
  }
  return res.status(200).json(order)
  
    } catch (error) {
      console.error(error);
      res.status(500),
        json({
          message: "Error in updateorder",
        });
    }
  };