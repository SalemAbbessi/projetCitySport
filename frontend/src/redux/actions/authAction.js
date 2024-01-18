import axios from 'axios'
import { GET_USER, LOGOUT, USER_FAIL, USER_LOGIN, USER_REGISTER } from '../types'
import {setAlert} from './alertActions'

export const register=(formData,navigate)=>async(dispatch)=>{
    try {
        const res=await axios.post('http://localhost:5000/auth/register',formData)
        dispatch({type:USER_REGISTER,payload:res.data})
        navigate('/productlist')
    } catch (err) {
        dispatch({type:USER_FAIL})
        // err.response.data.errors.forEach(error=>dispatch(setAlert(error.msg,"danger")))
    }
}
/// login
export const login=(formDataLogin,navigate)=>async(dispatch)=>{
    try {
        const res=await axios.post('http://localhost:5000/auth/login',formDataLogin)
        dispatch({type:USER_LOGIN,payload:res.data})
        navigate('/productlist')
    } catch (err) {
        dispatch({type:USER_FAIL})
        // err.response.data.errors.forEach(error=>dispatch(setAlert(error.msg,"danger")))
    }
}




// get auth user
export const current=()=>async(dispatch)=>{
    const config={
        headers:{
            "Authorization":localStorage.getItem('token')
        }
    }
    try {
        const res=await axios.get('http://localhost:5000/auth/current',config)
        dispatch({type:GET_USER,payload:res.data})
    } catch (err) {
        dispatch({type:USER_FAIL})
    }
}

 // logout

 export const logout=()=>{
     return {
         type:LOGOUT
     }
 }

// edit profile 
 export const editprofile=(id,formData , navigate)=>async(dispatch)=>
 { 

     const config={
         headers:{
             "Authorization":localStorage.getItem('token')
         }
     }
  try {
      const res=await axios.put(`http://localhost:5000/users/${id}` ,formData , config)
      console.log(res.data)
      dispatch (current())
      navigate ('/user/profile')
  } catch (error) {
      console.log (error)
  }
 }