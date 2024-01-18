import './UserList.css'
import { useEffect } from 'react'
import {useParams,Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import CardUser from '../../components/CardUser/CardUser';
import { getallusers } from '../../redux/actions/userActions';

function UserList () {

   let users=useSelector(state=>state.userReducer.users) 

   
    if(users && users.payload) {
         users = users.payload
    } 
   
    const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(getallusers())
    },[])
   
    return (
        <div className="list">

        <Link to='/user/settings'>
        <button class="btn4">
              Back
              <i class="fa fa-reply-all"></i>

            </button>
        </Link>     
        <table>
            <tr>
              <th>Name</th>
              <th>@email</th>
              <th>Action</th>
            </tr>
          </table>
          {users.map((user) => (
            <CardUser key={user._id} user={user} />
          ))}
        </div>
      );
}
export default UserList