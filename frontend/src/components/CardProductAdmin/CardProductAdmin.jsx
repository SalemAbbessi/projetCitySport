import {
    allproduct,
    getoneproduct,
    deleteproduct,
    upadateproduct
  } from "../../redux/actions/productAction"
// import { deleteuser } from "../../redux/actions/userActions";
  import "./CardProductAdmin.css";
  import { useDispatch } from "react-redux";
  import { useNavigate ,Link } from "react-router-dom";

  
  function CardProductAdmin({ product }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const deletUser = () => {
    //   if (window.confirm("are you sure ")) {
    //     dispatch(deleteuser(user._id));
    //   }
    // };
    return (
      <div>
        <table>
          <tr>
            <td>{product.name_product}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td>
              
            <div className="actions">
            <button
              className="btn5" onClick={() => {dispatch(getoneproduct(product._id));navigate("/user/productdes");}}>    
                <i class="fa fa-eye"></i>
                </button>
                 <button   onClick={()=>{dispatch (getoneproduct(product._id));navigate('/admin/editproduct')}}
                 className="btn5" >       
                <i class="fa fa-pencil"></i>
                </button>
              <button className="btn5"  onClick={()=>dispatch(deleteproduct(product._id))} >
                <i class="fa fa-trash"></i>
              </button>
            </div>
              
            </td>
          </tr>
        </table>
      </div>
    );
  }
  export default CardProductAdmin;