import React from 'react';

import Header from './components/Header.js';
import Subheading from './components/Subheading.js';
import Blob from './components/Blob.js';

import Wine from './assets/wine-graphic.jpg';

const Home = props => {
    return (
        <>
        <Header />
        <div className='main'>
            <Subheading>What is Alcohol?</Subheading>
            <Blob side='left' alt='Wine Graphic' image={Wine}>Alcohol is a substance formed when yeast ferments (breaks down) the sugar from different foods. Yeast breaks down different ingredients in different alcoholic beverages, like apples in cider, and potatoes in vodka. Alcohol is classified as a "sedative" which means is surpresses the nervous system's activity at high doses. At lower doses, alcohol can have the opposite effect and act as a stimulant, causing people to become more euphoric and extroverted. Even at low doses, alcohol has effects on every part of the body, and the severtity increases as someone's blood alcohol content (BAC) increases.</Blob>
        </div>
        </>
    );
}


export default Home;