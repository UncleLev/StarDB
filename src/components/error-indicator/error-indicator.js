import React from 'react';
import './error-indicator.css'

const ErrorIndicator = () => {
    return(
        <div className="error-indicator">
            <span className="boom">Boom</span>
            <span>
                Somthing has gone wrong
            </span>
            <span>
                (but we shoto robim)
            </span>
        </div>
    );
};

export default ErrorIndicator;