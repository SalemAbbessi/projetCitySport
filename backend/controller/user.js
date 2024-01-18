const User = require("../models/user.js")

// cotroller for getallproducts
exports.getallUsers = async (req, res) => {
  try {

    const users = await User.find()
    return res.status(200).json({
        payload:users
    });

  } catch (error) {
    console.error(error);
    res.status(500),
      json({
        message: "Error in getallUsers",
      });
  }
};

// cotroller for creatproducts
exports.creatUsers = async (req, res) => {
  try {
    const {name_user,email_user,password_user,age_user}=req.body
    const newUser=new User(req.body);
    await newUser.save();
    return res.status(201).json({
     payload:newUser   
    })
    
  } catch (error) {
    console.error(error);
    res.status(500).
      json({
        message: "Error in creatUser",
      });
  }
};

// cotroller for readproducts
exports.getUser = async (req, res) => {
  try {

    const userId=req.params.id;
    const user=await User.findOne({_id : userId});
    if (!user) {
      return res.status(404).json({ message: 'user not found' });
    }
   return  res.status(200).json(user)


  } catch (error) {
    console.error(error);
    res.status(500),
      json({
        message: "Error in readUser",
      });
  }
};

// cotroller for deleteusers

exports.deleteUser = async (req, res) => {
  try {
    const userId=req.params.id;
    const user=await User.deleteOne({_id : userId})
    return res.status(200).json({ message: 'User deleted' });


  } catch (error) {
    console.error(error);
    res.status(500),
      json({
        message: "Error in deleteUser",
      });
  }
  
};
exports.updateUser = async (req, res) => {
    try {
      const userId=req.params.id;
      const user=await User.findOneAndUpdate({_id : userId},req.body,{new:true})
  if(!user){
    return res.status(404).json({message:'user not found'})
  }
  return res.status(200).json(user)
  
    } catch (error) {
      console.error(error);
      res.status(500).
        json({
          message: "Error in updateUser",
        });
    }
  };
  
