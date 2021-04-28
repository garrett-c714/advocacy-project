import React from 'react';

import Zoom from 'react-reveal/Zoom';

const Header = props => {
    return (
        <div className='header-block flex-center'>
            <Zoom>
                <div className='flex-center header-content' >
                    <p className='header-header'>Alcohol and its effect <br />on teens</p>
                    <p className='byline'>By Garrett Cox</p>
                </div>
            </Zoom>
        </div>
    );
}

export default Header;