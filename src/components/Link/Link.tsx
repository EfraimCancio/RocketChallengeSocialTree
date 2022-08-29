import React from "react";
import './Link.css';

const Link = (props: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
        <>
            <button className="link-button">
                <h3>{props.name}</h3>
            </button>
        </>
    )
}

export default Link;