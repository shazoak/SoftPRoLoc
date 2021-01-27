import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isAuth: false,
    error: "",
};

const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
});

const { reducer, actions } = userSlice;

export const { loginPending, loginSuccess, loginFail , registerPending, registerSuccess, registerFail} = actions;

export default reducer;