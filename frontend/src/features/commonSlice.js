import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: undefined,
    type: undefined,
}

export const commonSlice = createSlice({
    name: "commons",
    initialState,
    reducers: {
        show_success: (state, action) =>{
            state.message = action.payload
            state.type = "success"
        },
        show_error: (state, action) =>{
            state.message = action.payload
            state.type = "error"
        },
        setInitialState: (state,action) =>{
            state.message = undefined
            state.type = undefined
        }
    }
})

export const showSuccessMessage = (message) => async (dispatch) => {
    dispatch(show_success(message))
    setTimeout(() => {
        dispatch(setInitialState())
    }, 1500)
}

export const showErrorMessage = (message) => async (dispatch) => {
    dispatch(show_error(message))
    setTimeout(() => {
        // dispatch(setInitialState())
    }, 5500)
}

export default commonSlice.reducer
export const {show_error, show_success, setInitialState} = commonSlice.actions