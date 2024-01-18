import axios from 'axios'
import { GET_ALL_USERS ,GET_ONE_USER,DELETE_USER} from '../types'



export const getallusers=()=>async(dispatch)=>
{ 
    const config={
        headers:{
            "Authorization":localStorage.getItem('token')
        }
    }
 try {
     const res=await axios.get('http://localhost:5000/users',config)
     dispatch ({type:GET_ALL_USERS,payload :res.data})
 } catch (error) {
     console.log (error)
 }
}



export const getoneuser=(id)=>async(dispatch)=>
{ 
    const config={
        headers:{
            "Authorization":localStorage.getItem('token')
        }
    }
 try {
     const res=await axios.get(`http://localhost:5000/users/${id}`,config)
     dispatch ({type:GET_ONE_USER,payload :res.data})
 } catch (error) {
     console.log (error)
 }
}



export const deleteuser=(id)=>async(dispatch)=>
{ 
    const config={
        headers:{
            "Authorization":localStorage.getItem('token')
        }
    }
 try {
     const res=await axios.delete(`http://localhost:5000/users/${id}`,config)
     dispatch (getallusers())
 } catch (error) {
     console.log (error)
 }
}