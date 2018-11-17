import React from 'react';

const sum = (props) => {
    return (
        <h1>{props.numbers.reduce((a, b) => (a + b))}</h1>
    )
}

export default sum;