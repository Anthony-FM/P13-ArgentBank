import { createAction, createReducer } from '@reduxjs/toolkit'

// State initial
const initialState = {    
  error: '',    
  email: '',
  password: '',
  token: '',
  logIn: false,
  logOut: true,
  firstname: '',
  lastname: ''
    
}

// Actions
export const addError = createAction('add/error',
  (error) => ({
    payload: error
  })
)

export const addUserMail = createAction(
    'addUser/userEmail',
    (email) => ({
        payload: email
    })
)
export const addPassWord = createAction(
    'addUser/passWord',
    (password) => ({
        payload: password 
    })
)

export const addToken = createAction(
  'add/token',
  (token) => ({
    payload: token
  })
)
export const addFirstname = createAction(
  'add/firstname',
  (firstname) => ({
    payload: firstname
  })
)
export const addLastname = createAction(
  'add/lastname',
  (lastname) => ({
    payload: lastname
  })
)

export const toggleLogInLogOut = createAction('toggle/log')
export const toggleLogOut = createAction('toggle/logOut')

// Reducer
export default createReducer(initialState, (builder) =>
  builder
    
    .addCase(addError, (draft, action) => {      
        draft.error = action.payload       
        return      
    })
    .addCase(addUserMail, (draft, action) => {
        draft.email = action.payload        
        return
    })
    .addCase(addPassWord, (draft, action) => {
        draft.password = action.payload        
        return
    })
    .addCase(addToken, (draft, action) => {
      draft.token = action.payload 
      return
    })
    .addCase(addFirstname, (draft, action) => {
      draft.firstname = action.payload 
      return
    })
    .addCase(addLastname, (draft, action) => {
      draft.lastname = action.payload 
      return
    })
    .addCase(toggleLogInLogOut, (draft) => {
      if(draft.logIn === false){
        draft.logIn = true
        draft.logOut = false
        draft.error = ''
        return
      }
      if(draft.logIn === true){
        draft.logIn = false
        draft.logOut = true
        draft.email = ''
        draft.password = ''
        draft.firstname = ''
        draft.lastname = ''
        draft.error = ''
        return
      }
        
    })
    .addCase(toggleLogOut, (draft) => {
      draft.logIn = false
      draft.logOut = true
      draft.email = ''
      draft.password = ''
      draft.firstname = ''
      draft.lastname = ''
      return
    })
)