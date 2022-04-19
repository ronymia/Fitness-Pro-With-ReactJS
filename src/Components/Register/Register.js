import React from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { async } from '@firebase/util';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');

    const handleRegister = async event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);


        // console.log(email, password, confirmPassword);
    }

    if (error) {
        return (
            <div>
                <p>
                    Error : {error.message}
                </p>
            </div>
        )
    }

    if (loading) {
        return (
            <div>
                <p>
                    Loading...
                </p>
            </div>
        )
    }

    if (user) {
        navigate('/home');
        console.log(user);
    }

    return (
        <div className=' form-container'>
            <h1 className='text-center my-4 text-4xl font-semibold'>Register</h1>
            <form onSubmit={handleRegister}
                className='mx-auto'>

                <label htmlFor="name">Name</label>
                <input
                    ref={nameRef}
                    className='block border-2 rounded p-2 w-full ml-1'
                    type="text" name="name" id="" placeholder='Your Name' required />

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

                <input
                    className='bg-yellow-400 hover:bg-yellow-500 cursor-pointer mt-4 w-full rounded h-8'
                    type="submit" value="Register" />
            </form>
            <p className='my-4'> Already Have an Account ? <Link className='text-yellow-600' to='/login'>Login here</Link></p>

            <SocialLogin />
        </div>
    );
};

export default Register;