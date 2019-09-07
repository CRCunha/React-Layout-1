import React from 'react';
import './nav.css'
import Menu from '../Menu';

const Nav = () => (
    <div class="nav">
        <div class="logo">
            <img src="https://braze-marketing-assets.s3.amazonaws.com/images/partner_logos/react-native.png" />
        </div>
        <div class="menu">
            <Menu />
            <Menu />
            <Menu />
            <Menu />
        </div>
    </div>
);

export default Nav;