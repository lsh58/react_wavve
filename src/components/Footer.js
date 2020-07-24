import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__notice">
                <div className="footer__notice__wrapper">
                    <div className="footer__notice__frontWrapper">
                        <sapn className="footer__notice__title">공지사항</sapn>
                        <ul>
                            <li></li> 
                            <li></li> 
                        </ul>
                    </div>
                    <div className="footer__notice__backWrapper">
                        <button className="footer__notice__prevBtn"></button>
                        <button className="footer__notice__nextBtn"></button>
                    </div>
                </div>
            </div>
            <div className="footer__menu"></div>
        </div>
    );
};

export default Footer;