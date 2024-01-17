import React from 'react';
import classes from './UI/Footer.module.css';

const Footer = ( {footerInitialsText} ) => {

    const emailAddress = 'leha.geraskin.80@gmail.com'

    return (
        <footer className={classes.footer__container}>
            <div className={classes.footer-body__container}>
                <div>{footerInitialsText}</div>
                <div>2023</div>
                <a href={`mailto:${emailAddress}`}>
                    {emailAddress}
                </a>
            </div>
        </footer>
    )
}

export default Footer
