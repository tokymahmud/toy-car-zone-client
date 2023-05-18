import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Reacttabs from './React Tabs/Reacttabs';

const Home = () => {
    return (
        <div className='p-5'>
            
            <Banner></Banner>

            
            <Gallery></Gallery>
            <Reacttabs></Reacttabs>

        </div>
    );
};

export default Home;