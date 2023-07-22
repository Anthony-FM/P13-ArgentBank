import './index.css'
// composants
import Account from '../../components/Account'
// hook
import { useSelector, useDispatch } from 'react-redux'
// selector
import { selectUser, selectChangeName } from '../../utils/selectors'
// react router
import { Navigate } from 'react-router'
// call API
import { fetchPutMethodName } from '../../utils/service/callApi'
// action
import { toggleEditName } from '../../features/toggleChangeName'
import { addFirstname, addLastname } from '../../features/signIn'
import { addFirstnameInput, addLastnameInput } from '../../features/toggleChangeName'

export default function UserAccount(){
  // dispatch
  const dispatch = useDispatch()

  const toggleName = useSelector(selectChangeName).toggleName
  const firstName = useSelector(selectUser).firstname
  const lastName = useSelector(selectUser).lastname
  const logOut = useSelector(selectUser).logOut
  const token = useSelector(selectUser).token
  
  let firstnameInput= useSelector(selectChangeName).firstnameInput
  let lastnameInput = useSelector(selectChangeName).lastnameInput
  const data  = {
    "firstName" : firstnameInput,
    "lastName" : lastnameInput
  }

  async function changeName(data, token){
    await fetchPutMethodName(data, token)
  }

  function handlerSaveName(data){
    changeName(data, token)
    dispatch(addFirstname(firstnameInput))
    dispatch(addLastname(lastnameInput))
    dispatch(toggleEditName())
  }

    return logOut ? 
    < Navigate to="/signIn" remplace={true}/> 
    :
     <main className="main bg-dark">      
      { 
        toggleName === false ? 
        (
          <div className="header">
          <h1>Welcome back<br />{firstName} {lastName}!</h1>
          <button className="edit-button" onClick={() => dispatch(toggleEditName())}>Edit Name</button>
          </div>
        )
        :
        (
          <div className="header">
            <h1>Welcome back<br />{firstName} {lastName}!</h1>
            <div className='inputContainer'>
            <input type="text" id="firstname" value={firstnameInput} className='inputNames' placeholder={firstName} onChange={(e) =>  dispatch(addFirstnameInput(e.target.value)) }/>
            <input type="text" id="lastname" value={lastnameInput} className='inputNames' placeholder={lastName} onChange={(e) => dispatch(addLastnameInput(e.target.value)) }/>
            </div>
            <div className='buttonsContainer'>
              <button className="edit-button" onClick={() => handlerSaveName(data)}>Save</button>
              <button className="edit-button"  onClick={() => dispatch(toggleEditName())}>Cancel</button>
            </div>
          </div>
        )
      } 
      
    
    <h2 className="sr-only">Accounts</h2>

    <Account 
    title="Argent Bank Checking (x8349)" 
    amount="$2,082.79" 
    description="Available Balance"
    />

    <Account 
    title="Argent Bank Savings (x6712)" 
    amount="$10,928.42" 
    description="Available Balance"
    />

    <Account 
    title="Argent Bank Credit Card (x8349)" 
    amount="$184.30" 
    description="Current Balance"
    />

  </main>
}