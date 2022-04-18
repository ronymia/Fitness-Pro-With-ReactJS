import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Register = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');

    const formSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password !== confirmPassword) {
            return 'dont match password'
        }

        console.log(email, password, confirmPassword);
    }

    return (
        <div className=' form-container'>
            <h1 className='text-center my-4 text-4xl font-semibold'>Register</h1>
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
                    className='block border-2 rounded p-2 w-full ml-1 mb-2'
                    type="password" name="email" id="" placeholder='Your password' required />

                <label htmlFor="password">Confirm Password</label>
                <input
                    ref={confirmPasswordRef}
                    className='block border-2 rounded p-2 w-full ml-1'
                    type="password" name="email" id="" placeholder='Your password' required />

                <input
                    className='bg-yellow-400 hover:bg-yellow-500 cursor-pointer mt-4 w-full rounded h-8'
                    type="submit" value="Register" />
            </form>
            <p className='my-4'> Already Have an Account ? <Link className='text-yellow-600' to='/login'>Login here</Link></p>
        </div>
    );
};

export default Register;