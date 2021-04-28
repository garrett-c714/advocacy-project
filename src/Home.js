import React from 'react';

import Header from './components/Header.js';
import Subheading from './components/Subheading.js';
import Blob from './components/Blob.js';
import SubSubheading from './components/SubSubheading.js';
import Footer from './components/Footer.js';

import Fade from 'react-reveal/Fade';

import Wine from './assets/wine-graphic.jpg';
import Jail from './assets/jail-image.jpg';
import Crash from './assets/car-crash.jpg';
import Brain from './assets/brain-alc.jpg';
import Crash2 from './assets/car-crash-2.jpg';
import Crash3 from './assets/car-crash-3.jpg';
import Chevron from './assets/chevron-down.png';

const Home = props => {
    return (
        <>
        <Header />
        <Fade left>
            <div className='chevbox'>
                <img className='chevron' src={Chevron} alt='Chevron' />
            </div>
        </Fade>
        <div className='main'>
            <Subheading>What is Alcohol?</Subheading>
            <Blob side='left' alt='Wine Graphic' image={Wine}>
                Alcohol is a substance formed when yeast ferments (breaks down) the sugar from different foods. Yeast breaks down different ingredients in different alcoholic beverages, like apples in cider, and potatoes in vodka. Alcohol is classified as a "sedative" which means is surpresses the nervous system's activity at high doses. At lower doses, alcohol can have the opposite effect and act as a stimulant, causing people to become more euphoric and extroverted. Even at low doses, alcohol has effects on every part of the body, and the severtity increases as someone's blood alcohol content (BAC) increases. According to the CDC, alcohol is the most commonly used and misued drug among young people.
            </Blob>
            <Subheading>What are the Consequences?</Subheading>
            <p className='caption'>Improper use of alcohol can have many consequences such as:</p>
            <SubSubheading>Legal Consequences: </SubSubheading>
            <Blob side='left' alt='Jail Image' image={Jail}>
                Jail time is a known consequence of Alcohol abuse. Alcohol decreases your impulse control, which makes you more prone to rash decisions that could send you to jail. 
            </Blob>
            <Blob side='right' alt='Fatal Car Crash' image={Crash}>
                Driving with alcohol in your system can put a DUI on your record if you blow a high enough blood alcohol content, which doesn't take much. A DUI can have major ramifications, some lingering longer than you would expect. Some of the short term consequences are well-known, such as assorted fines and fees, temporary license suspension, community service, and court hearings. Aside from those consequences, a DUI can still affect you further in the future. Some people deal with PTSD from the harm they cause to others, and having a DUI on your record can influence your success in career opportunites later.
            </Blob>
            <SubSubheading>Developmental Consequences: </SubSubheading>
            <Blob side='left' alt='Brain Graphic' image={Brain}>
                Alcohol is known to affect the brain of individuals who consume it. It can be especially dangerous to teenagers as their brains have not yet finished devloping, and habitual alcohol usage can have a serious impact on their brains. One of the last parts of the brain to develop is the predfrontal cortex. This is one of the areas that alcohol inhibits, and this is dangerous if the prefrontal cortex is not fully developed before being exposed to alcohol, potentially causing permanent damage. Studies have also shown that alcohol significantly impairs learning and memory in teens. Legal drinking age restrictions are in place all around the world because of the risk alcohol poses for the teenage brain. 
            </Blob>
            <Subheading>Drinking and Driving</Subheading>
            <Blob side='left' alt='Car Crash' image={Crash2}>
                Drinking and driving is one of the most deadly problems caused by widespread alcohol consumption. Because alcohol impairs both your decision making and reaction time, it is never a good idea to drive while under the influence of alcohol. The combination of these two effects could cause someone to seriously hurt or kill themself and others while operating a vehicle. The consequences of drinking and driving are severe. You will at least end up with a DUI permanently on record, and could face serious prison time among other things.
            </Blob>
            <Blob side='right' alt='Car Crash' image={Crash3}>
                Every single day, roughly 28 people die in drunk-driving-related accidents. Every one of their deaths is preventable. There are steps you can take to ensure your safety and the safety of those around you.
                <br></br>
                <ul>
                    <li>Plan a ride home before the party, either by planning to take an Uber, or selecting a designated driver.</li>
                    <li>NEVER drive after you have been drinking, even if you "think" you'll be fine to drive.</li>
                    <li>If you know someone is drinking, make sure they do not get behind the wheel.</li>
                    <li>Always wear your seatbelt - it could save you if you come across an impaired driver.</li>
                </ul>
            </Blob>
            <div className='spacer'></div>
        </div>
        <Footer />
        </>
    );
}


export default Home;