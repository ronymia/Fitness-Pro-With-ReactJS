import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const formSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }


    return (
        <div className=' form-container'>
            <h1 className='text-center my-4 text-4xl font-semibold'>Login</h1>
            <form onSubmit={formSubmit}
                className='mx-auto'>
                <label htmlFor="email">Email</label>
                <input
                    ref={emailRef}
                    className='block border-2 rounded p-2 w-full ml-1  mb-2'
                    type="email" name="email" id="" placeholder='Your email' required />

                <label htmlFor="password">Password</label>
                <input
                    ref={passwordRef}
                    className='block border-2 rounded p-2 w-full ml-1'
                    type="password" name="email" id="" placeholder='Your password' required />

                <input
                    className='bg-yellow-400 hover:bg-yellow-500 cursor-pointer mt-4 w-full rounded h-8'
                    type="submit" value="Login" />
            </form>
            <p className='my-4'> Are you new <span className='text-yellow-600'>Fitness Pro</span> ? <Link to='/register'>Create a New Account</Link></p>
        </div>
    );
};

export default Login;