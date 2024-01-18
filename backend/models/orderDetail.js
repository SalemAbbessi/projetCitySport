const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderDetailSchema = new mongoose.Schema({

 unit_price:{

    type:Number,
    required:true,
    min:0
},
total_price:{

    type:Number,
    required:true,
    min:0
},
order:{
    type:Schema.Types.ObjectId,
    ref:"Order"  
},
product:{
    type:Schema.Types.ObjectId,
    ref:"Product"
},

})
module.exports=mongoose.model('OrderDetail',orderDetailSchema);