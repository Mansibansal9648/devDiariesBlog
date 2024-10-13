import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: '',
    name:'',
    username:'',
    email: '',
    isLogin: false,
    accessToken: ''

}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, { payload }) => {
            state.id = payload.id
            state.name=payload.name
            state.username=payload.username
            state.email = payload.emails
            state.isLogin = payload.isLogin
            state.accessToken = payload.accessToken
        },
    },
})

export default userSlice.reducer
export const { login } = userSlice.actions
