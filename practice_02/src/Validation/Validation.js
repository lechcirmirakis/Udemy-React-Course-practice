import React from 'react';

const validation = (props) => {
    let validationMessage = 'Text long enough';

    if (props.length <= 5) {
        validationMessage = 'Text is To Short';
    }

    else if(props.length >= 10) {
        validationMessage = 'Text is To Long';
    }

    return (
        <div className="validMsg">
            <p>{validationMessage}</p>
        </div>
    )
}

export default validation;
