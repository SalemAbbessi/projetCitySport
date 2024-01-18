const User=require('../models/user.js')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

exports.register=async(req, res)=>{
try{
    const{name_user, email_user,  password_user, age_user}=req.body;
    const existingUser=await User.findOne({email_user:req.body.email_user,isActive:true})
if(existingUser){
    return res.status(401).json({errors:[{msg:"user already exist with this email"}]})
}
const hashedPassword=await bcrypt.hash(password_user, 10)

const user = new User({ name_user, email_user, password_user:hashedPassword, age_user})
await user.save()
const KEY = process.env.KEY;

const token =jwt.sign({userId:user._id},KEY,{expiresIn:'1h'})
res.cookie('token',token,{httpOnly:true,secure:true,maxAge:3600000})
res.setHeader('Authorization',token)
return res.status(201).json({
payload:user,
token
});
}catch(error){
    console.log(error)
    return res.status(500).json({
      payload:"Error register Auth a user"  
    })

}

}

exports.login=async(req, res)=>{
try {
   const{email_user,password_user}=req.body;
   console.log(req.body)
   const user = await User.findOne({email_user:email_user})
   console.log(user);
   if(!user) {
    return res.status(401).json(
        {errors:[{msg:'Email or password incorrect'}]}
    )
   }

   const passwordMAtch=await bcrypt.compare(password_user,user.password_user)
   if (!passwordMAtch){
    return res.status(401).json({
      errors:({msg:"Email or password incorrect"})
    })
   }
   const KEY = process.env.KEY;

   const token=jwt.sign({userId:user._id},KEY,{expiresIn:'1d'})
   res.cookie('token',token,{httpOnly:true,secure:true,maxAge:86400000})
   res.setHeader('Authorization',token)
   return res.status(201).json({
    payload:user,
    token,
    })
  }
 catch (error) {
  console.log(error)
  return res.status(500).json({
    payload: "Error login Auth a user"
})
}
}



exports.logout = (req, res) => {
  // Clear the cookie
  res.clearCookie('token');

  // Remove the Authorization header
  res.removeHeader('Authorization');

  // Return the response
  return res.status(200).json({ message: 'LogOut' });
}

exports.current = async (req, res) => {
  try {
      const user = await User.findOne({_id:req.user.id})
      res.send(user)
  } catch (error) {
    console.log(error);
      res.status(500).send('Server error')
  }
}