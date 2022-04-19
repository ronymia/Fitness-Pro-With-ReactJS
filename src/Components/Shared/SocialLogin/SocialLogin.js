import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleLogo from '../../../images/googleLogo.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className=''>
            <div className="flex justify-center items-center gap-2 my-4">
                <div className="bg-gray-300 h-[1px] w-2/5"></div>
                <p>or</p>
                <div className="bg-gray-300 h-[1px] w-2/5"></div>
            </div>
            <button
                onClick={() => signInWithGoogle()}
                className="bg-yellow-600 w-full rounded-md h-[80px] flex justify-center items-center">
                <div className="flex items-center">
                    <img className='h-[100px]' src={googleLogo} alt="" />
                    <div className="">
                        <span className='text-2xl text-white'>Continue With Google</span>
                    </div>
                </div>
            </button>
        </div>
    );
};

export default SocialLogin;