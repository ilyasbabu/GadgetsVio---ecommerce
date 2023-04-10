import { createSlice } from "@reduxjs/toolkit";
import { showErrorMessage, showSuccessMessage } from "./commonSlice";
import { handleError } from "./commonSlice";
import axios from "axios";
import jwtDecode from "jwt-decode";

const initialState = {
    loading: false,
    authTokens: {},
    userData: {},
    success: false,
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login_request: (state, action) => {
            state.loading = true;
        },
        login_success: (state, action) => {
            state.success = true;
            state.authTokens = action.payload.token;
            state.userData = action.payload.data;
            state.loading = false;
        },
        login_fail: (state, action) => {
            state.loading = false;
            state.success = false;
            state.authTokens = {};
            state.userData = {};
        },
    }
});

export const loginPost = (email, password) => async (dispatch) => {
    try {
        console.log(email,password);
        dispatch(login_request())
        console.log(email,password);
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        const response = await axios.post("/api/account/login/", {
            username: email,
            password: password,
        },config)
        if (response.status === 200){
            dispatch(showSuccessMessage("Logged in Successfully!"))
            const userData = jwtDecode(response.data.access)
            dispatch(login_success({
                token:response.data,
                data:userData
            }))
            localStorage.setItem('authTokens', JSON.stringify(response.data))
            localStorage.setItem('userData', JSON.stringify(userData))
        }else{
            dispatch(logout())
        }
    } catch (err) {
        dispatch(handleError(err))
        dispatch(logout())
    }
}

export const getUserFromStorage = () => async (dispatch) => {
    try{
        const data = localStorage.getItem('userData');
        const tokens = localStorage.getItem('authTokens');
        console.log(tokens);
        if (tokens === null || tokens === "{}" || tokens === undefined){
            dispatch(logout())
        }else{
            dispatch(login_success({
                token:JSON.parse(tokens),
                data:JSON.parse(data),
            }));
        }
    }catch(err){
        dispatch(handleError(err))
        dispatch(logout())
    }
}

export const logout = () => async (dispatch) => {
    dispatch(login_fail())
    localStorage.setItem('authTokens', "{}")
    localStorage.setItem('userData', "{}")
}


export default loginSlice.reducer;
export const { login_request, login_success, login_fail } = loginSlice.actions;
