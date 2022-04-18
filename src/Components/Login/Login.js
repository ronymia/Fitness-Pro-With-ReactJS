import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className=' form-container'>
            <h1 className='text-center my-4 text-4xl font-semibold'>Login</h1>
            <form className='mx-auto'>
                <label htmlFor="email">Email</label>
                <input
                    className='block border-2 rounded p-2 w-full ml-1  mb-2'
                    type="email" name="email" id="" placeholder='Your email' required />

                <label htmlFor="password">Password</label>
                <input
                    className='block border-2 rounded p-2 w-full ml-1'
                    type="password" name="email" id="" placeholder='Your password' required />

                <input
                    className='bg-yellow-400 hover:bg-yellow-500 cursor-pointer mt-4 w-full rounded h-8'
                    type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;