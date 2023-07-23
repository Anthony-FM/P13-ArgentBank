import './index.css'
// hook
import { useDispatch } from 'react-redux'
// Actions
import { addUserMail, addPassWord } from '../../features/signIn'
// fonction handler
import { handler } from '../../pages/SignIn'


export default function FormSignIn({email, password}){
  
  const dispatch = useDispatch()  
    
  return <form>
    <div className="input-wrapper">
      <label htmlFor="email">Email</label>     
      <input type="text" id="email"  onChange={(e) => dispatch(addUserMail(e.target.value)) }/>
    </div>

    <div className="input-wrapper">
      <label htmlFor="password">Password</label>
      <input type="password" id="password"  onChange={(e) => dispatch(addPassWord(e.target.value)) }/>
    </div>

    <div className="input-remember">
      <input type="checkbox" id="remember-me" />
      <label htmlFor="remember-me">Remember me</label>
    </div>
    
    <button className="sign-in-button" onClick={(e) => handler(e, email, password)}>Sign In</button> 
  </form>
}