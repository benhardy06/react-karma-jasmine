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
                <MenuNav links={['Link 1','Link 2','Link 3','Link 4','Link 5']} />
                
            </div>
            <div className="menuSignIn" data-test="menuSignIn">
                <MenuNav links={['Shop', 'Sign In']} />
                
            </div>
        </div>
    )
}