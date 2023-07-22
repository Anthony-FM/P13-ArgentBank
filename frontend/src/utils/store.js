// feature
import signIn from "../features/signIn";
import toggleChangeName from "../features/toggleChangeName";
// configureStore @reduxToolkit
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        signIn: signIn,
        editName: toggleChangeName
    }
})