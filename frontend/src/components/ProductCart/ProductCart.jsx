import {useParams,Link,useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import { addtoshop, getoneproduct}from '../../redux/actions/productAction'

import './ProductCart.css'
function ProductCart ({product})
{ 


  const dispatch=useDispatch()
  const navigate=useNavigate()


    return (
        <div className="card my-5 py-4" style={{width:"15rem"}}>
        <img src={product.image} className="card-img-top" alt="pic"  height="180px"/>
        <div className="card-body text-center">
          <h2 className="card-title">{product.name_product}</h2>
          <h4 className="lead">
            {product.price}  dt 
          </h4>
        
          
        </div>
        
      <button  className='bt-2'  onClick={()=>{dispatch(getoneproduct(product._id)) ; navigate("/user/productdes")}}>  Voir Detail</button>
      <button className='bt-2'  onClick={()=>{dispatch(addtoshop(product._id))}}> ADD TO SHOP </button>
      </div>
     
          
         
    )
    
}
export default ProductCart