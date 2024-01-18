const express=require("express")
const router=express.Router();
const userController=require("../controller/user.js");
const isAuth = require("../middlewares/isAuth.js");

// router.get('/',userController.getallUsers)
router.get('/',isAuth,userController.getallUsers)
// router.post('/add',userController.creatUser)
// router.post('/add',userController.creatUsers)
// router.get('/add',userController.readUser)
router.get('/:id',isAuth, userController.getUser);
//router.delete
router.delete('/:id',isAuth, userController.deleteUser);
//router.update
router.put('/:id',isAuth, userController.updateUser);
module.exports = router