import React from 'react';

import Fade from 'react-reveal/Fade'

const Blob = props => {
    const {image, alt, side, children} = props;

    return (
        <>
        {side==='left' && 
        <Fade right>
        <div className='blob'>
            <div className='blob-1'>
                <p className='blob-text'>
                    {children} 
                </p>
            </div>
            <div className='blob-2'>
                <img className='blob-image' src={image} alt={alt} />
            </div>
        </div>
        </Fade>
        }
        {side==='right' && 
        <Fade left>
        <div className='blob-left'>
            <div className='blob-2'>
                <img className='blob-image' src={image} alt={alt} />
            </div>
            <div className='blob-1'>
                <p className='blob-text'>
                    {children} 
                </p>
            </div>
        </div>
        </Fade>
        }
        </>
    );
}

export default Blob;