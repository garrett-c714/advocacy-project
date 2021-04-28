import React from 'react';

import Wine from '../assets/wine-graphic.jpg'

const Blob = props => {
    const {image, alt, side, children} = props;

    return (
        <>
        {side=='left' && 
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
        }
        {side=='right' && 
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
        }
        </>
    );
}

export default Blob;