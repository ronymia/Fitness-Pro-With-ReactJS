import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <header className='h-16 bg-gray-300 flex justify-around items-center'>
            <div>
                <img src={logo} alt="" />
            </div>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/about'>About Me</Link>
                <Link to='/login'>Login</Link>
            </nav>
        </header>
    );
};

export default Header;