import React from 'react';

const Footer = ( {footerInitialsText} ) => {

    const emailAddress = 'leha.geraskin.80@gmail.com'

    return (
        <footer className='footer__container'>
            <div className="footer-body__container">
                <div className="footer-initials">{footerInitialsText}</div>
                <div className="footer-year">2023</div>
                <a href={`mailto:${emailAddress}`} className='footer-email'>
                    {emailAddress}
                </a>
            </div>
        </footer>
    )
}

export default Footer
