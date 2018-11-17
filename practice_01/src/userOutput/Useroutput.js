import React from 'react';
import './User.css';

const useroutput = (props) => {
    return (
        <div className="User">
            <p>{props.name}</p>
            <p>{props.surname}</p>
        </div>
    );
};

export default useroutput;
