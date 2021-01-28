import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';



function Footer(){

    return (
        <>
        {
         <div className="footerBackground">
            <a href="https://www.linkedin.com/in/anahit-khechumyan-259176205/">
                <FontAwesomeIcon icon = {faLinkedinIn}/>
            </a>
            <a href="https://github.com/AnahitKhechumyan">
                <FontAwesomeIcon icon = {faGithub}/>
            </a>
        </div>
        }
        </>
    );
};

export default Footer;