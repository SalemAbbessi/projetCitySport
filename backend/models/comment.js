const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentSchema = new mongoose.Schema({

text:{
    type:"string",
    trim:true,
    required:true
},
date:{
type: Date,
default: Date.now 

},
note:{
 type:Number   
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
module.exports=mongoose.model('Comment',commentSchema);
