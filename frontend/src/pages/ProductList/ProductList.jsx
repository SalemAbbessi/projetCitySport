import { useEffect } from 'react'
import './ProductList.css'
import ProductCart from '../../components/ProductCart/ProductCart'
import {useDispatch, useSelector} from 'react-redux'
import { allproduct } from '../../redux/actions/productAction'
function ProductList()
{

const dispatch=useDispatch()
const products=useSelector(state=>state.productReducer.products)
useEffect(()=>{
    dispatch(allproduct())
},[])

  return (
      <div className='listproduct'>

            {products.map(product=><ProductCart  key={product._id} product={product}/>)}
      </div>
  )
}
export default ProductList