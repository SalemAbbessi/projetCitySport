import {ADD_TO_SHOP, GET_ALL_PRODUCTS,GET_ONE_PRODUCT ,UPDATE_PRODUCT,DELETE_PRODUCT,ALL_PRODUCTS ,TOGGLEFALSE,TOGGLETRUE, REMOVE_TO_SHOP, INCREMENT, DECREMENT} from "../types";
const initState={
    products:[],
    product :{},
    edit:false ,
    shops :[]

}
function productReducer (state=initState ,{type,payload})
{  
   switch (type) {
       case GET_ALL_PRODUCTS :

          return {...state,products:payload.products}   

       case GET_ONE_PRODUCT :{
           return {...state,product:payload}
       }   
       case ALL_PRODUCTS :
           return {...state,products:payload.payload}
        case DELETE_PRODUCT :
            return {...state,products:state.products.filtre(product=>product._id !== payload)}  
            case TOGGLETRUE :
                return {
                  ...state,edit:true
                }
                case TOGGLEFALSE:
                  return{
                    ...state,edit:false 
                  }
            case ADD_TO_SHOP :
              const article=state.products.find(product=>
                product._id === payload) 

              const inShop= state.shops.find(shop=>shop._id === payload ? true : false )
              
              return {
                ...state,shops: inShop ? state.shops.map(article=>article._id===payload ? 
                  {...article,qty:article.qty+1} : article):[...state.shops,{...article,qty:1}]
              }
              case REMOVE_TO_SHOP:
                return {
                  ...state,shops:state.shops.filter(shop=>shop._id!==payload)
                }
              case INCREMENT : 
              console.log("state.shop" , state.shops)
                return {
                 ...state,shops:state.shops.map(el=>el._id===payload ? {...el,qty:el.qty+1}: {...el,qty:el.qty})
              }
              case DECREMENT : 
              return {
                ...state,shops:state.shops.map(el=>el._id===payload ? {...el ,qty:el.qty >0 ? el.qty-1 :el.qty}:{...el,qty:el.qty})
              }
       default:
           return state 
   } 
}
export default productReducer