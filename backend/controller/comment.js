const Comment=require("../models/comment.js")

exports.creatComment = async (req, res) => {
    try {
     const {text,note}=req.body
     const user=req.params.user
     const product=req.params.product
     const newComment =  new Comment({text,note,product,user});
     await newComment.save();
     return res.status(201).json({
      payload:newComment
     })
      
    } catch (error) {
      console.error(error);
      res.status(500).
        json({
          message: "Error in creatComment",
        });
    }
  };
  exports.getallComments = async (req, res) => {
    try {
  
      const comments = await Comment.find()
      return res.status(200).json({
          payload:comments
      });
  
    } catch (error) {
      console.error(error);
      res.status(500).
        json({
          message: "Error in getallComments",
        });
    }
  };
  exports.getComment = async (req, res) => {
    try {
      const commenttId=req.params.id;
      const comment=await Comment.findOne({_id : commenttId});
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
      }
     return  res.status(200).json(comment)
    } catch (error) {
      console.error(error);
      res.status(500).
        json({
          message: "Error in readComment",
        });
    }
  };


  exports.deleteComment = async (req, res) => {
    try {
      const commentId=req.params.id;
     const comment=await Comment.deleteOne({_id : commentId})
     return res.status(200).json({ message: 'Commentdeleted' });
    
  
    } catch (error) {
      console.error(error);
      res.status(500).
        json({
          message: "Error in deleteComment",
        });
    }
  };
  exports.updateComment = async (req, res) => {
    try {
      const commentId=req.params.id;
      const comment=await Comment.findOneAndUpdate({_id : commentId},req.body,{new:true})
  if(!comment){
    return res.status(404).json({message:'comment not found'})
  }
  return res.status(200).json(comment)
  
    } catch (error) {
      console.error(error);
      res.status(500).
        json({
          message: "Error in updateComment",
        });
    }
  };