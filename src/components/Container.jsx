import React from 'react'

const Container = ({ children, className = "" }) => {
    return (
        <div className={`mx-auto max-w-7xl px-6 py-10 
        sm:px-8 sm:py-8
        md:px-14 md:py-14
        lg:px-18 lg:py-18
        ${className}`}>
            {children}
        </div>
    );
};

export default Container