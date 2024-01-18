const Category=require("../models/category.js")

exports.getallCategorys = async (req, res) => {
    try {
  
      const categorys = await Category.find()
      return res.status(200).json({
          payload:categorys
      });
  
    } catch (error) {
      console.error(error);
      res.status(500),
        json({
          message: "Error in getallCategorys",
        });
    }
  };
  exports.creatCategory = async (req, res) => {
    try {
     const {name_category}=req.body
     const newCategory =  new Category(req.body);
     await newCategory.save();
     return res.status(201).json({
      payload:newCategory
     })
      
    } catch (error) {
      console.error(error);
      res.status(500).
        json({
          message: "Error in creatCategory",
        });
    }
  };
  exports.getCategory = async (req, res) => {
    try {
      const categorytId=req.params.id;
      const category=await Category.findOne({_id : categorytId});
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
     return  res.status(200).json(category)
    } catch (error) {
      console.error(error);
      res.status(500).
        json({
          message: "Error in readCategory",
        });
    }
  };
  exports.deleteCategory = async (req, res) => {
    try {
      const categoryIdId=req.params.id;
     const category=await Category.deleteOne({_id : categoryIdId})
     return res.status(200).json({ message: 'Category deleted' });
    
  
    } catch (error) {
      console.error(error);
      res.status(500).
        json({
          message: "Error in deleteCategory",
        });
    }
  };
  exports.updateCategory = async (req, res) => {
    try {
      const categoryId=req.params.id;
      const category=await Category.findOneAndUpdate({_id : categoryId},req.body,{new:true})
  if(!category){
    return res.status(404).json({message:'category not found'})
  }
  return res.status(200).json(category)
  
    } catch (error) {
      console.error(error);
      res.status(500).
        json({
          message: "Error in updateCategory",
        });
    }
  };