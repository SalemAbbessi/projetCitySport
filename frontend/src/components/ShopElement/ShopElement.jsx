import { increment,decrement, removetoshop } from "../../redux/actions/productAction"
import "./ShopElement.css"
import {useDispatch} from 'react-redux'
import {useState} from 'react'

function ShopElement ({article})
{
const [qte,setQte]=useState(1);
const dispatch=useDispatch()


  return (
    <tbody>
    <tr>
      <td className="item">
        <div className="d-flex"> <img src={article.image} alt="" style={{width:"100px", height:"50px"}} />
          <div className="pl-2"> {article.name_product} <div className="text-uppercase new"><span className="fas fa-star" />new</div>
            <div className="d-flex flex-column justify-content-center">
            </div>
          </div>
        </div></td>
      <td> 
        <div className="quantite">
        <i className="fa fa-plus-circle" onClick={()=>dispatch(increment(article._id))}></i>
        <h6> {article.qty}</h6>
        <i className="fa fa-minus-circle" onClick={()=>dispatch(decrement(article._id))}></i>

        </div>
      </td>
      <td className="d-flex flex-column"><span className="red">{article.price} dt </span> </td>
      <td className="font-weight-bold avcdef"> {article.price * article.qty} 
      <div className="close" onClick={()=>dispatch(removetoshop(article._id))}>×</div>
      </td>
    </tr> 
  </tbody>
  )
}
export default ShopElement