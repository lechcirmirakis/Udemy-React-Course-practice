import React from 'react';
import './Menu.css';

const menu = (props) => {

    let menuLinks = props.links.map((element) => {
        return <li><a href={element.urL}></a>{element.text}</li>
        
    });

    return (
        <ul className="Menu">
            {menuLinks}
        </ul>
    )
}

export default menu;