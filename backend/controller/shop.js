const Shop=require("../models/shop.js")

exports.creatShop = async (req, res) => {
    try {
     const {quantity}=req.body
     const user=req.params.user
     const product=req.params.product
     const newShop =  new Shop({quantity,product,user});
     await newShop.save();
     return res.status(201).json({
      payload:newShop
     })
      
    } catch (error) {
      console.error(error);
      res.status(500).
        json({
          message: "Error in creatshop",
        });
    }
  };

  exports.getallShops = async (req, res) => {
    try {
  
      const shops = await Shop.find()
      return res.status(200).json({
          payload:shops
      });
  
    } catch (error) {
      console.error(error);
      res.status(500),
        json({
          message: "Error in getallshops",
        });
    }
  };

  exports.getShop = async (req, res) => {
    try {
      const shopId=req.params.id;
      const shop=await Shop.findOne({_id : shopId});
      if (!shop) {
        return res.status(404).json({ message: 'shop not found' });
      }
     return  res.status(200).json(shop)
    } catch (error) {
      console.error(error);
      res.status(500).
        json({
          message: "Error in readshop",
        });
    }
  };
  exports.deleteShop = async (req, res) => {
    try {
      const shoptId=req.params.id;
     const shop=await Shop.deleteOne({_id : shoptId})
     return res.status(200).json({ message: 'shop deleted' });
    
  
    } catch (error) {
      console.error(error);
      res.status(500),
        json({
          message: "Error in deleteshop",
        });
    }
  };

  exports.updateShop = async (req, res) => {
    try {
      const shopId=req.params.id;
      const shop=await Shop.findOneAndUpdate({_id : shopId},req.body,{new:true})
  if(!shop){
    return res.status(404).json({message:'shop not found'})
  }
  return res.status(200).json(shop)
  
    } catch (error) {
      console.error(error);
      res.status(500).
        json({
          message: "Error in updateshop",
        });
    }
  };
  