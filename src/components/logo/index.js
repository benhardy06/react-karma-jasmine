import React from 'react';
import logo from './assets/placeholder.png';
import './styles.css'

export default function Logo(props) {
    return(<div className="logo-wrap" data-test="logo-wrapper"><img className="logo" src={logo} alt="client logo" data-test="logo"/></div>)
    
}