import "./AddNewProduct.css"
import { useEffect, useState } from "react"
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {addNewProduct} from '../../redux/actions/productAction'
function AddNewProduct()
{  
    const product =useSelector(state=>state.productReducer.product)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [formData,setFormData]=useState({ name_product:"",description:"",price:0, image:"",stock:""})
    console.log("FormDAta", formData)

    const handlChange=(e)=>{
       setFormData ({...formData,[e.target.name]:e.target.value})
    }
    return( <div className="editproduct">  
     <div  className="editinput">
     <p> name product  :</p> 	
    <input type="text" name="name_product"  onChange={handlChange}/>
     </div>

     <div  className="editinput">
     <p> Description   :</p> 	
    <input type="text" name="description" onChange={handlChange}/>
     </div>

   <div className="editinput">
       <p>prix :</p>
       <input type="number" name="price" onChange={handlChange}/>
    </div>
    
   <div className="editinput">
       <p>image:</p>
       <input type="text" name="image" onChange={handlChange}/>
    </div>


    <div className="editinput">
        <p>sotck</p>
        <input type="number" name= "stock"   onChange={handlChange}/>
    </div> 

    <div className="editinput">
    <button onClick={()=>{dispatch(addNewProduct(formData,navigate('/admin/productlist')))}}>  ADD Product  </button>
    </div>
    
    </div> )    
}

export default  AddNewProduct