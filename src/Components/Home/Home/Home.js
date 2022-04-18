import React from 'react';
import './Home.css';
import banner from '../../../images/banner.png';
import Services from '../.././Services/Services';

const Home = () => {
    return (
        <section>
            <div className="h-4/5 w-full">
                <img src={banner} alt="" />
            </div>
            <div className="">
                <Services></Services>
            </div>
        </section>
    );
};

export default Home;