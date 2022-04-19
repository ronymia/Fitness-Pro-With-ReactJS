import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOutBook = () => {

    const { serviceId } = useParams();

    return (
        <div>
            <h1>Your Booking {serviceId}</h1>
        </div>
    );
};

export default CheckOutBook;