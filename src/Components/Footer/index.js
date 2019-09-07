import React from 'react';
import './footer.css';
import LogoReact from '../../../public/Logo_nome.png'

const Footer = () => (
    <footer>
        <div className="container">
            <div className="logo">
                <img src={LogoReact} />
            </div>
        </div>
    </footer>
);

export default Footer;