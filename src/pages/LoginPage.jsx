import React from 'react'
import { Navigate } from 'react-router';
import { login } from '../redux/slices/user.slice';
import { useDispatch, useSelector } from 'react-redux';

function LoginPage() {
    const dispatch = useDispatch();
    const { userDetails } = useSelector(state => state.user)

    if (userDetails.isAuthenticated) {
        return <Navigate to="/" />
    }

    const loginHandler = () => {
        dispatch(login({
                name: 'John',
                password: '123456',
                age: 28,
                email: 'example@mail.com',
                address: 'random address',
        }))
    }

    return (
        <div>
            <h1>This is Loginpage</h1>
            <button onClick={loginHandler}>Click here to login</button>
        </div>
    )
}

export default LoginPage