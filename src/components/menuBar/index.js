import React from 'react';
import Logo from '../logo'
import MenuNav from '../menuNav'
import './styles.css'
export default function MenuBar(props) {
    return(
        <div className="menuBar" data-test="menuBar">
            <div className="menuLogo" data-test="menuLogo">
                <Logo />
                
            </div>
            <div className="menuNav" data-test="menuNav">
                <MenuNav />
            </div>
        </div>
    )
}