const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shopSchema = new mongoose.Schema({
quantity:{
   type:Number, 
   required:true,
   min:0
},
product:{
    type:Schema.Types.ObjectId,
    ref:"Product"
},
user:{
    type:Schema.Types.ObjectId,
    ref:"User"  
}
})
module.exports=mongoose.model('Shop',shopSchema);