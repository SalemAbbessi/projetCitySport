import './Product.css'
import {useNavigate} from 'react-router-dom'
import {useDispatch ,useSelector} from 'react-redux'

import { addtoshop, getoneproduct}from '../../redux/actions/productAction'

function ProductDes ()
{ 
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const product=useSelector(state=>state.productReducer.product)

    return (
      <div className="card my-5 py-4" style={{width:"18rem"}}>
      <img src={product.image} className="card-img-top" alt={product.name_product}  height="100px"/>
      <div className="card-body text-center">
        <h2 className="card-title">{product.name_product}</h2>
        <h4 className="lead">
          {product.price}
        </h4>
        <p className="lead">
          {product.description}
        </p>
      
        
      </div>
      
    <button  className='bt-2'  onClick={()=>{dispatch(getoneproduct(product._id)) ; navigate("/productlist")}}>  return to store</button>
    <button className='bt-2'  onClick={()=>{dispatch(addtoshop(product._id))}}> ADD TO SHOP </button>
    </div>
    )
    
}
export default ProductDes