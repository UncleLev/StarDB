import React from 'react';
import PropTypes from "prop-types";
import './row.css';


const Row = ({left,rigth}) => {
    return(
        <div className="row">
            <div className="row-left">
                {left}
            </div>
            <div className="row-rigth">
                {rigth}
            </div>
        </div>
    );
};

Row.propTypes = {
    left: PropTypes.node,
    rigth: PropTypes.node
};

export default Row;