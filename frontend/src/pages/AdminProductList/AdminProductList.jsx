import CardProductAdmin from "../../components/CardProductAdmin/CardProductAdmin"
import "./AdminProductList.css";
import { useNavigate, Link }  from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {getoneproduct,allproduct,upadateproduct,deleteproduct} from "../../redux/actions/productAction"
import { useEffect } from "react";


function AdminProductList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  useEffect(() => {
    dispatch(allproduct());
  }, [dispatch]);
  return (
    <div className="list">
      <Link to="/user/settings">
      <button class="btn4">
              Back
              <i class="fa fa-reply-all"></i>

            </button>
      </Link>
      <button
        class="btn3"
        onClick={() => {
       navigate("/admin/addnewproduct");
        }}
      >
       Add New Product
<i class="fa fa-paper-plane-o"></i>
      </button>
      <table>
        <tr>
          <th>Product </th>
          <th>Description</th>
          <th>Prix</th>
          <th>Stock</th>
          <th>Actions </th>
        </tr>
      </table>
      {products.map((product) => (
        <CardProductAdmin key={product._id} product={product} />
      ))}
    </div>
  );
}
export default AdminProductList;