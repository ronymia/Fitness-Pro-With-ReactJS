import React from 'react';

const Blogs = () => {
    return (
        <section className='p-8  grid grid-cols-3 gap-6 '>
            <div className="bg-red-300 p-4 rounded">
                <p>
                    <span className='text-lg font-bold'>Question-1 : </span> Difference between authorization and authentication
                </p>
                <p>
                    <span className='text-lg font-semibold'>Answer : </span>authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board
                </p>
            </div>
            <div className="bg-red-300 p-4 rounded">
                <p>
                    <span className='text-lg font-bold'>Question-2 : </span> What other options do you have to implement authentication?
                </p>
                <p>
                    <span className='text-lg font-semibold'>Answer : </span>authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                </p>
            </div>
            <div className="bg-red-300 p-4 rounded">
                <p>
                    <span className='text-lg font-bold'>Question-3 : </span>  What other services does firebase provide other than authentication?
                </p>
                <p>
                    <span className='text-lg font-semibold'>Answer : </span>Firebase Auth alternatives
                    <br />
                    Parse - Open Source Backend Platform;<br />
                    Back4app - Parse Hosting Platform;<br />
                    Kinvey - Mobile Backend as a Service (mBaaS) for the Enterprise;<br />
                    Backendless - Mobile Backend and API Services Platform;<br />
                    Kuzzle - Backend for web, hybrid, or native mobile apps and IoT projects;
                </p>
            </div>
        </section>
    );
};

export default Blogs;