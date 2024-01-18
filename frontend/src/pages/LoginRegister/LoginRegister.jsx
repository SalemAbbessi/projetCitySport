import './LoginRegister.css'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { register } from '../../redux/actions/authAction'
import { login } from '../../redux/actions/authAction'

function LoginRegister ()
{

  const [formData,setFormData]=useState({name_user:"", email_user:"",password_user:"",age_user:""})
  const [formLogin,setFromLogin]=useState({email_user:"",password_user:""})

const navigate=useNavigate()
const dispatch=useDispatch()

// handleChange Registre
const handleChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}

// handleChange Login 
const handleChangeLogin=(e)=>{
  setFromLogin({...formLogin,[e.target.name]:e.target.value})
}
// handleSubmit Registre
const handleSubmit=(e)=>{
  try {
    e.preventDefault()
    dispatch(register(formData,navigate))
    setFormData({name_user:"", email_user:"",password_user:"",age_user:""})
  } catch (error) {
    console.log("Errro LoginRegiser", error)
  }
}

// handleSubmit  Login
const handleSubmitLogin=(e)=>{
  e.preventDefault()
  
  dispatch(login(formLogin,navigate))

  setFormData({ email_user:"",password_user:""})
}
return(
        <div className="mainLoginRegistre">  	
        <input type="checkbox" id="chk" aria-hidden="true" className='inputLoginRegistre' />
        <div className="signup">
          <form onSubmit={handleSubmit}>
            {/* <form> */}

            <label htmlFor="chk" aria-hidden="true" className='labelLoginRegistre'> S'inscrire</label>
            <input  className='inputLoginRegistre' type="text" name="name_user" placeholder="Name" required  onChange={handleChange} />
            <input className='inputLoginRegistre' type="email" name="email_user" placeholder="Email" required   onChange={handleChange} />
            <input className='inputLoginRegistre' type="password" name="password_user" placeholder="Password" required onChange={handleChange} />  
            <input className='inputLoginRegistre' type="number" name="age_user" placeholder="Age"  onChange={handleChange} />  
             {/* kolhom fehom handlchange */}
            <button className='buttonLoginRegistre' type='submit'>s'inscrire</button>
            <div className="social-icons">
					<a href="#" className="social-login__icon fab fa-instagram"></a>
					<a href="#" className="social-login__icon fab fa-facebook"></a>
					<a href="#" className="social-login__icon fab fa-twitter"></a>
				</div>
          </form>
        </div>


        <div className="login">
          <form  onSubmit={handleSubmitLogin} > 
          {/* <form   >  */}
            <label  className='labelLoginRegistre' htmlFor="chk" aria-hidden="true" >Connexion</label>
            <input  className='inputLoginRegistre' type="email" name="email_user" placeholder="Email" required onChange={handleChangeLogin}/>
            {/* <input  className='inputLoginRegistre' type="email" name="email" placeholder="Email" required /> */}
            {/* <input className='inputLoginRegistre' type="password" name="password" placeholder="Password"  /> */}
            <input className='inputLoginRegistre' type="password" name="password_user" placeholder="Password" required onChange={handleChangeLogin} />
            <button className='buttonLoginRegistre'>Connexion</button>
            <div className="social-icons">
					<a href="#" className="social-login__icon fab fa-instagram"></a>
					<a href="#" className="social-login__icon fab fa-facebook"></a>
					<a href="#" className="social-login__icon fab fa-twitter"></a>
				</div>
          </form>
        </div>
        
      </div>
    )
}
export default LoginRegister