import React from 'react';
import './Chart.css';

const chart = (props) => {
    return (
        <div className="charts" onClick={props.clicked}>
            <p>{props.letter}</p>
        </div>
    )
}

export default chart;