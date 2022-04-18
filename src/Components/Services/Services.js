import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='w-full bg-[#f1faff]'>
            <h1 className='my-8 text-center text-3xl font-semibold'>My Services</h1>
            <div className='grid grid-cols-4 gap-4 p-4'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;