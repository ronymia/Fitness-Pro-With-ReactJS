import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Service = ({ service }) => {
    const navigate = useNavigate()
    // destructure
    const { tittle, img, description, price, id } = service;

    // Navigate to checkout 
    const navigateToCheckOut = id => {
        navigate(`/service/${id}`);
    }


    return (
        <div className="container shadow-lg">
            <div className="">
                <img className='rounded' src={img} alt="" />
            </div>
            <p className='text-2xl font-medium text-center my-2'>{tittle}</p>
            <p className='text-center p-2'>{description}</p>
            <div className="flex justify-between items-center px-4">
                <button
                    onClick={() => navigateToCheckOut(id)}
                    className='bg-yellow-300 w-2/4 my-4 rounded h-8 hover:bg-yellow-500'
                >Book Now
                </button>
                <p className='text-3xl font-semibold text-yellow-500'>
                    {price}
                </p>
            </div>
        </div>
    );
};

export default Service;