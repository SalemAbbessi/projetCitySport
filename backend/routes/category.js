const express=require("express")
const router=express.Router();
const categoryController=require("../controller/category.js");
const isAuth = require("../middlewares/isAuth.js");

router.get('/',isAuth,categoryController.getallCategorys)
router.post('/add',isAuth, categoryController.creatCategory)
router.get('/:id', isAuth,categoryController.getCategory);
router.delete('/:id', isAuth, categoryController.deleteCategory);
router.put('/:id', isAuth, categoryController.updateCategory);



module.exports = router