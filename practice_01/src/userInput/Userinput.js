import React from 'react';

const userinput = (props) => {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px'
    }
    return (
        <div>
            <input style={style} onChange={props.changed} value={props.name} type="text"/>
        </div>
    )
}

export default userinput;