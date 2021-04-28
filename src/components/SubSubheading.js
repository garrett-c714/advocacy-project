import React from 'react';

const SubSubheading = props => {
    const {children} = props;
    return (
        <h2 className='sub-sub-heading'>{children}</h2>
    );
}

export default SubSubheading;