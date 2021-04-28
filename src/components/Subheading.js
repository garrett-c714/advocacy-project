import React from 'react';
import clsx from 'clsx';


const Subheading = props => {
    const {className, children, ...rest} = props;
    const classes = clsx('subheading', className);
    return (
        <h1 className={classes} {...rest} >{children}</h1>
    );
}

export default Subheading;