import React from 'react';

import Zoom from 'react-reveal/Zoom';

const Header = props => {
    return (
        <div className='header-block flex-center'>
            <Zoom>
                <div className='flex-center header-content' >
                    <p className='header-header'>Alcohol and the Consequences <br />of Overuse</p>
                    <p className='byline'>By Garrett Cox</p>
                </div>
            </Zoom>
        </div>
    );
}

export default Header;