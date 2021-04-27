import React from 'react';

import Header from './components/Header.js';
import Subheading from './components/Subheading.js';

const Home = props => {
    return (
        <>
        <Header />
        <div className='main'>
            <Subheading>Test Heading</Subheading>
        </div>
        </>
    );
}


export default Home;