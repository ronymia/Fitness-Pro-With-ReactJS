import React from 'react';
import notFound from '../../images/notFound.jpg'

const NotFound = () => {
    return (
        <>
            <h1 className='text-center my-8 text-3xl'>The page Your are looking not Found</h1>
            <div className='flex justify-center items-center rounded'>
                <img className='w-3/6' src={notFound} alt="" />
            </div>
        </>
    );
};

export default NotFound;