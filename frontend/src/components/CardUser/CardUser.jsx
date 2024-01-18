import {
    getallusers,
    getoneuser,
    deleteuser,
  } from "../../redux/actions/userActions"
  import "./CardUser.css";
  import { useDispatch } from "react-redux";
  import { useNavigate } from "react-router-dom";
  
  function CardUser({ user }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const deletUser = () => {
      if (window.confirm("are you sure ")) {
        dispatch(deleteuser(user._id));
      }
    };
    return (
      <div>
        <table>
          <tr>
            <td>{user.name_user}</td>
            <td>{user.email_user}</td>
            <td>
              
          
              <button className="btn2"  onClick={()=>dispatch(deleteuser(user._id))} >
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
  export default CardUser;