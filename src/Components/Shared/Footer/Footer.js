import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date()
    const date = today.getFullYear()
    return (
        <footer className='h-12 bg-slate-900 mt-4 text-yellow-500 text-center pt-4'>
            <h1>copy right @ {date}</h1>
        </footer>
    );
};

export default Footer;