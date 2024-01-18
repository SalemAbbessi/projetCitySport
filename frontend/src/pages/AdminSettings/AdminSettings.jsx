import { useNavigate} from 'react-router-dom'
import './AdminSettings.css'

function AdminSettings () {
  const navigate=useNavigate()


    return ( <div className='body'>
             
             <button className="btn4" onClick={()=>navigate('/admin/userlist')}> Setting Users <i class="fa fa-users"></i> </button>
             
             
            <button className="btn4" onClick={()=>navigate('/admin/productlist')} > Setting Products <i class="fa fa-cart-plus"></i>  </button>
           
          
              <button className="btn3" onClick={()=>navigate('/user/editprofile')}> Edit Profile <i class="fa fa-address-card"></i>  </button>
           


    </div>)
}
export default AdminSettings