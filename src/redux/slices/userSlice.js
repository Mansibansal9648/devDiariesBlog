//Dependencies
import { createSlice } from '@reduxjs/toolkit'
import strings from '../../utils/stringConstant'

const initialState = {
    id: '',
    name: '',
    username: '',
    email: '',
    isLogin: false,
    accessToken: ''

}

const userSlice = createSlice({
    name: strings.USER,
    initialState: initialState,
    reducers: {
        login: (state, { payload }) => {
            state.id = payload.id
            state.name = payload.name
            state.username = payload.username
            state.email = payload.email
            state.isLogin = payload.isLogin
            state.accessToken = payload.accessToken
        },
    },
})

export default userSlice.reducer
export const { login } = userSlice.actions
