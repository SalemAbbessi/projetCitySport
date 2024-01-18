import "./EditProduct.css"
import { useEffect, useState } from "react"
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {upadateproduct} from '../../redux/actions/productAction'
function EditProduct()
{  
    const product=useSelector(state=>state.productReducer.product)
    console.log("product", product)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    
    const [formData,setFormData]=useState({ 
        name_product:product.name_product,
        description:product.description,
        price:product.price,
        image:product.image,
        stock:product.stock
    })
    const handlChange=(e)=>{
       setFormData ({...formData,[e.target.name]:e.target.value})
    }
    useEffect (()=>{
        setFormData({name:product.name ,description:product.description , prix:product.prix,imageUrl:product.imageUrl, disponible:product.disponible , solde:product.solde, rayon:product.rayon})  }
        ,[product])
    return(  <div className="editproduct">  
    <div  className="editinput">
    <p> name product  :</p> 	
   <input type="text" name="name_product" value={formData.name_product}  onChange={handlChange}/>
    </div>

    <div className="editinput">
      <p>Description :</p>
      <input type="text" name="description"   value={formData.description} onChange={handlChange}/>
   </div>
  <div className="editinput">
      <p>prix :</p>
      <input type="number" name="price"   value={formData.price} onChange={handlChange}/>
   </div>
   <div className="editinput">
      <p>imageUrl :</p>
      <input type="text" name="image"   value={formData.image} onChange={handlChange}/>
   </div>
   <div className="editinput">
       <p>Stock</p>
       <input type="text" name= "stock"   value={formData.stock}  onChange={handlChange}/>
   </div> 



   <div className="editinput">
   <button onClick={()=>{dispatch( upadateproduct(product._id,formData) ) ;navigate('/admin/productlist')  }  }>  Save Edit   </button>
   </div>
   
   </div> )    
}

export default  EditProduct