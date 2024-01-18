const express=require("express")
const router=express.Router();
const commentController=require("../controller/comment.js");
const isAuth = require("../middlewares/isAuth.js");

router.post('/add/:user/:product', isAuth,commentController.creatComment)
router.get('/', isAuth,commentController.getallComments)
router.get('/:id', isAuth, commentController.getComment);
router.delete('/:id', isAuth, commentController.deleteComment);
router.put('/:id', isAuth, commentController.updateComment);

module.exports = router