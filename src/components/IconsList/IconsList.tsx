import React from 'react';
import './IconsList.css';
import Github from '../../assets/images/github.svg';
import Insta from '../../assets/images/instagram.svg';
import Linkedin from '../../assets/images/linkedin.svg';
import Twitch from '../../assets/images/twitch.svg';
import Twitter from '../../assets/images/twitter.svg';

const IconList = () => {
    return (
        <>
            <ul className="social-links">
                <li>
                    <img src={Twitter} alt=""/>
                </li>
                <li>
                    <img src={Twitch} alt=""/>
                </li>
                <li>
                    <img src={Insta} alt=""/>
                </li>
                <li>
                    <img src={Linkedin} alt=""/>
                </li>
                <li>
                    <img src={Github} alt=""/>
                </li>
            </ul>
        </>
    )
}

export default IconList;