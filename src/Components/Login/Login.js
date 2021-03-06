import React from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    //Require Auth
    // const [user] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return (

            <p>
                Loading..
            </p>

        )
    }

    if (error) {
        return (

            <p>Error: {error.message}</p>

        );
    }

    return (
        <div className=' form-container'>
            <h1 className='text-center my-4 text-4xl font-semibold'>Login</h1>
            <form onSubmit={handleLogin}
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

                {error}

                <input
                    className='bg-yellow-400 hover:bg-yellow-500 cursor-pointer mt-4 w-full rounded h-8'
                    type="submit" value="Login" />
            </form>
            <p className='my-4'> Are you new <span className='text-yellow-600'>Fitness Pro</span> ? <Link className='text-yellow-600' to='/register'>Create a New Account</Link></p>

            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;