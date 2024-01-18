import "./EditProfile.css"
import { useEffect, useState } from "react"
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {editprofile} from '../../redux/actions/authAction'
function EditProfile()
{  
    let user=useSelector(state=>state.authReducer.user)
    if ( user && user.payload ) {
        user = user.payload
      }
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [formData,setFormData]=useState({ name_user:"",email_user:'',password_user:"",age_user:""})
    const handlChange=(e)=>{
        e.preventDefault()
        setFormData ({...formData,[e.target.name]:e.target.value})
    }
    useEffect (()=>{setFormData({name_user:user.name_user , email_user:user.email_user , password_user:user.password_user , age_user:user.age_user})  },[])
    return( <div className="editprofile">  
     <div  className="editinput">
     <p>name :</p> 	
    <input type="text" name="name_user" value={formData.name_user} onChange={handlChange}/>
     </div>
   <div className="editinput">
       <p>email :</p>
       <input type="text" name="email_user" value={formData.email_user} onChange={handlChange}/>
    </div>


    <div className="editinput">
        <p>age :</p>
        <input type="Number" name= "age_user"  value={formData.age_user} onChange={handlChange}/>
    </div> 
    <div className="editinput">
    <button onClick={()=>{dispatch(editprofile (user._id ,formData,navigate) )}}>  Save </button>
    </div>
    
    </div> )    
}

export default  EditProfile