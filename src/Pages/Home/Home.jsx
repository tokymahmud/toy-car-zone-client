import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Reacttabs from './React Tabs/Reacttabs';
import Input from '../Input/Input';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div className='p-5'>
            
            <Banner></Banner>

            
            <Gallery></Gallery>
            <Reacttabs></Reacttabs>
            <Input></Input>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;