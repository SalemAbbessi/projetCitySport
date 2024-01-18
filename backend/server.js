const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv")
const cors=require("cors");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const authRoute=require('./routes/auth.js')
const productRoute = require("./routes/product.js")
const categoryRoute=require("./routes/category.js")
const userRoute=require("./routes/user.js")
const commentRoute=require("./routes/comment.js")
const orderRoute=require("./routes/order.js")
const orderDetailRoute=require("./routes/orderDetail.js")
const shopRoute= require('./routes/shop.js')
dotenv.config();
const app=express();
const server=process.env.SERVER;
const PORT=process.env.PORT||5000
const DB=process.env.DB

app.use(bodyParser.json())
app.use(cors());
app.use(cookieParser())

mongoose.connect(`${server}/${DB}`,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("DB CONNECTED DONE"))
.catch((err)=>console.error("DB not connected",err))

app.use('/auth', authRoute)
app.use('/products',productRoute)
app.use('/categorys',categoryRoute)
app.use('/users',userRoute)
app.use('/comment',commentRoute)

app.use('/order',orderRoute)
app.use('/orderDetail',orderDetailRoute)
app.use('/shop',shopRoute)


app.listen(PORT,console.log(`server running on port ${PORT}`));
