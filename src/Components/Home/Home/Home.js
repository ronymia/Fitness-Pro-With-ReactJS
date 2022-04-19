import React from 'react';
import './Home.css';
import banner from '../../../images/banner.png';
import Services from '../.././Services/Services';

const Home = () => {
    return (
        <section>
            <div className='banner-container '>


                <div className="pt-64">
                    <div className="pl-24">
                        <div className="">
                            <p className='text-white text-6xl font-bold'>
                                let's <span className='text-yellow-400'>start!</span> <br />
                                <p className='my-4'>
                                    Daily Workout
                                </p>
                                At <span className='text-yellow-400'>Fitness Pro</span>
                            </p>
                        </div>
                        <div className="flex gap-8 w-2/4 mt-4">
                            <button
                                className="bg-yellow-300 w-2/4 my-4 rounded h-8 hover:bg-yellow-500"
                            >Book Online</button>
                            <div className="bg-yellow-300 w-2/4 my-4 rounded h-8 hover:bg-yellow-500 flex items-center justify-center cursor-pointer">
                                <p>
                                    call now +88017xxxxxxxxxx
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <Services></Services>
            </div>
        </section>
    );
};

export default Home;