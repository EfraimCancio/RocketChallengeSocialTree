import React from "react";
import './Avatar.css'
import Img from '../../assets/images/avatar_image.jfif'

const Avatar = () => {
    return (
        <div className="avatar">
            <div className="mask">
                <img src={Img} alt=""></img>
            </div>
            <h2>@EfraimCancio</h2>
        </div>
    )
}

export default Avatar