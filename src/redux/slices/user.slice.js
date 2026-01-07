import { createSlice } from "@reduxjs/toolkit";
/*export const fetchUser = createAsyncThunk('Fetch Users', async ({ rejectWithValue }) => {
    try {

        const response = await fetch('https://fakestoreapi.com/users');
        return await response.json();
    }
    catch (error) {
        return rejectWithValue(error);
    }
}
)*/

/*
export const fetchUser = createAsyncThunk('Fetch Users', async (_,{ rejectWithValue }) => {
    try {
        const response = await fetch('https://fakestoreapi.com/users');
        console.log( 'fetchUser'+ new Date());
        if(!response.ok) {
            return rejectWithValue({error: "Something went wrong"})
        }
        return await response.json();
    } catch (error) {
        return rejectWithValue(error);
    }
})*/

const userInfo = {
    name: '',
    password: '',
    age: '',
    email: '',
    address: '',
}

const UserSlice = createSlice({
    name: 'User Slice',
    initialState: {
        loading: false,
        error: null,
        userList: [],
        userDetails: localStorage.getItem('userDetails') ?
            JSON.parse(localStorage.getItem('userDetails'))
            : {
                ...userInfo,
                isAuthenticated: false,
            }
    },
    reducers: {
        login(state, action) {
            const userDetails = { ...state.userDetails, ...action.payload, isAuthenticated: true };
            localStorage.setItem('userDetails', JSON.stringify(userDetails))
            return { ...state, userDetails }
        },
        logout(state) {
            localStorage.removeItem('userDetails');
            return { ...state, userDetails: { ...state.userDetails, ...userInfo, isAuthenticated: false } }
        }
    }
    /*extraReducers: (builder) => {
        builder
        .addCase(fetchUser.pending, (state) => {
            state.loading = true;
            state.userList = [];
            state.error = null;
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.userList = action.payload;
        })
        .addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            console.log("rejecte")
            state.error = action.payload;
        })
    }*/
})

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;