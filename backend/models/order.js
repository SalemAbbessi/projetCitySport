const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new mongoose.Schema({

      ordre_product:{
      type:String,
      trim:true,
      required: true
      },
      date:{
        type: Date,
        default: Date.now 
        
        },
      user:{
        type:Schema.Types.ObjectId,
        ref:"User"  
    },
    status_order:{
      type:String,
      default: "enCours",
      enum: ["enCours", "annullé","terminé"]

    }
})  
module.exports=mongoose.model('Order',orderSchema);