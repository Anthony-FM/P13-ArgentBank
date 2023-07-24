import { createAction, createReducer } from '@reduxjs/toolkit'

//State initial
const initialState = {
    toggleName: false,
    firstnameInput: '',
    lastnameInput: ''   
}

// Actions
export const toggleEditName = createAction('toggle/changeName')

export const addFirstnameInput = createAction('add/firstnameInput',
    (firstname) => ({
        payload: firstname
    })
)
export const addLastnameInput = createAction('add/lastnameInput',
    (lastname) => ({
        payload: lastname
    })
)

// Reducer
export default createReducer( initialState, (builder) => 
    builder
        .addCase(toggleEditName, (draft) => {
            if(draft.toggleName === false){
                draft.toggleName = true
                return
            } else {
                draft.toggleName = false
                return 
            }
        })
        .addCase(addFirstnameInput, (draft, action) => {
            draft.firstnameInput = action.payload
            return
        })
        .addCase(addLastnameInput, (draft, action) => {
            draft.lastnameInput = action.payload
            return
        })
)