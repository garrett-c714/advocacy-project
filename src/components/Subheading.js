import React from 'react';
import clsx from 'clsx';


const Subheading = props => {
    const {className, children, ...rest} = props;
    const classes = clsx('subheading', className);
    return (
        <h2 className={classes} {...rest} >{children}</h2>
    );
}

export default Subheading;