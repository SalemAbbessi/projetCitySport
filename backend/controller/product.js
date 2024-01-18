

const Product = require("../models/product.js");

// cotroller for getallproducts
exports.getallProducts = async (req, res) => {
  try {

    const products = await Product.find()
    return res.status(200).json({
        payload:products
    });

  } catch (error) {
    console.error(error);
    res.status(500),
      json({
        message: "Error in getallProducts",
      });
  }
};

// cotroller for creatproducts
exports.creatProduct = async (req, res) => {
  try {
   const {name_product,description, price,stock,image,category}=req.body
   const newProduct =  new Product(req.body);
   await newProduct.save();
   return res.status(201).json({
    payload:newProduct
   })

    
  } catch (error) {
    console.error(error);
    res.status(500).
      json({
        message: "Error in creatProduct",
      });
  }
};

// cotroller for readproducts
exports.getProduct = async (req, res) => {
  try {
    const productId=req.params.id;
    const product=await Product.findOne({_id : productId,isactive:true});
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
   return  res.status(200).json(product)
  } catch (error) {
    console.error(error);
    res.status(500),
      json({
        message: "Error in readProduct",
      });
  }
};

// cotroller for deleteproducts

exports.deleteProduct = async (req, res) => {
  try {
    const productId=req.params.id;
   const product=await Product.deleteOne({_id : productId})
   return res.status(200).json({ message: 'Product deleted' });
  

  } catch (error) {
    console.error(error);
    res.status(500),
      json({
        message: "Error in deleteProduct",
      });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const productId=req.params.id;
    const product=await Product.findOneAndUpdate({_id : productId},req.body,{new:true})
if(!product){
  return res.status(404).json({message:'product not found'})
}
return res.status(200).json(product)

  } catch (error) {
    console.error(error);
    res.status(500),
      json({
        message: "Error in updateProduct",
      });
  }
};
