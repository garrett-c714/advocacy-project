import React from 'react';

const Header = props => {
    return (
        <div className='header-block flex-center'>
            <div className='flex-center header-content' >
                <p className='header-header'>Alcohol and its effect <br />on teens</p>
                <p className='byline'>By Garrett Cox</p>
            </div>
        </div>
    );
}

export default Header;