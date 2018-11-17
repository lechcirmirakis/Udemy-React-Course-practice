import React from 'react';
import './Likes.css';

const likesBox = (props) => {
    return (
        <div className="Likebox">
            <h2>{props.likes}</h2>
            <p>Likes</p>
        </div>
    )
}

export default likesBox;