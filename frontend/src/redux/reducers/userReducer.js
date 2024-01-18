import { GET_ALL_USERS,GET_ONE_USER,DELETE_USER } from "../types";
const initState={
    users:[],
    user :{},
}
function userReducer (state=initState ,{type,payload})
{  
   switch (type) {
       case GET_ALL_USERS :

          return {...state,users:payload}   

       case GET_ONE_USER :{
           return {...state,user:payload}
       }   
       case DELETE_USER :{
        return {...state,users:state.users.filtre(user=>user._id !== payload)}
    }   
       default:
           return state 
   } 
}
export default userReducer