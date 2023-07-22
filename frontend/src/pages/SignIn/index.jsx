import './index.css'
// composants
import FormSignIn from '../../components/FormSignIn'
// hook
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
// selector
import { selectUser } from '../../utils/selectors'
// route
import { Navigate } from 'react-router-dom'
//service
import { postJSONAuthentification , tokenAuthentification } from '../../utils/service/callApi'
// Actions
import { addFirstname, addLastname, toggleLogInLogOut, addToken, addError  } from '../../features/signIn'
// store
import store from '../../utils/store'

// Fonction handler
export async function handler(e, email, password){
  e.preventDefault()
  const dispatch = store.dispatch
  
  const data = {
         "email": email,
         "password": password
       };
  const response = await postJSONAuthentification(data)
  console.log(response)

  if(response.status === 400){
    dispatch(addError(response.message))
    return
  } 

  else {
    
    const tokenFromRes = await response.body.token  
    const tokenResult = 'Bearer ' + tokenFromRes
    return dispatch(addToken(tokenResult))   
  }  
  
}

export default function SignIn(){
  const logIn = useSelector(selectUser).logIn
  const token = useSelector(selectUser).token
  const email = useSelector(selectUser).email
  const password = useSelector(selectUser).password  
  const error = useSelector(selectUser).error  
  const dispatch = useDispatch()

  useEffect(() => {
    async function authWithToken(token){    
    if(token !== ''){
      
      const tokenResponse = await tokenAuthentification(token)
      console.log(tokenResponse.body)
      dispatch(addFirstname(tokenResponse.body.firstName))
      dispatch(addLastname(tokenResponse.body.lastName))
      dispatch(toggleLogInLogOut())
      return
    }
    if(token === undefined){
      return
    }

    }
    authWithToken(token)

  }, [dispatch, token]
  )
  
  return logIn ? 
    <Navigate to="/user" remplace={true} /> 
    : 
    (
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <p className='error'>{error}</p>
          <FormSignIn 
            email={email}
            password={password}
          />
        </section>
      </main>
    )
  




    
}