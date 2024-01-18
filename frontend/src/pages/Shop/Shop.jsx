import ShopElement from "../../components/ShopElement/ShopElement"
import "./Shop.css"
import {useSelector} from "react-redux"
import { useEffect, useState } from "react";

function ShopCart ()
{ 
  const shops=useSelector(state=>state.productReducer.shops)
  let numberProducts=shops.length;

  const [facture,setFacture]=useState(0)
  useEffect(()=>{
    let factureFinal=0;
    shops.forEach(element => 
      factureFinal+=element.qty*element.price)
      setFacture(factureFinal)
  },[shops,facture,setFacture])
    return ( 
        <div className="wrapper">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column">
            <div className="h3">My Shop </div>
            <div className="text-uppercase"> numberProducts Products </div>
            <div className="text-uppercase"> {numberProducts} Products </div>
          </div>
          <div className="ml-auto btn"><span className="fas fa-cog" /></div>
        </div>
        <div id="table" className="bg-white rounded">
          <div className="tableau">     
          </div>
          <hr />
          <div className="table-responsive">
            <table className="table activitites">
              <thead>   
                <tr>
                  <th scope="col" className="text-uppercase header cln">Product</th>
                  <th scope="col" className="text-uppercase cln ">Quantity</th>
                  <th scope="col" className="text-uppercase cln ">price </th>
                  <th scope="col" className="text-uppercase cln ">total</th>
                </tr>
              </thead>
                {shops.map(article=> <ShopElement key={article._id} article={article}/>)}
                <tr>
                  <th scope="col" className="text-uppercase header cln"></th>
                  <th scope="col" className="text-uppercase cln "></th>
                  <th scope="col" className="text-uppercase cln "> Facture</th>
                  <th scope="col" className="text-uppercase cln ">{facture}  <span> dt </span> </th>
                </tr>
                <button className="confirmer"> Confirmer </button>
  
            </table>
          </div>
        </div>
      
      </div>

    )
}

export default ShopCart