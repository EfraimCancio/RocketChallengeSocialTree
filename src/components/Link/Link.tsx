import React from "react";
import './Link.css';

const Link = (props) => {
    return (
        <>
            <button className="link-button">
                <h3>{props.name}</h3>
            </button>
        </>
    )
}

export default Link;