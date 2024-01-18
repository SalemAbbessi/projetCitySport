const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categorySchema = new mongoose.Schema({

    name_category: {
        type: String,
        trim:true,
        required: true,
      },
})
module.exports=mongoose.model('Category',categorySchema);