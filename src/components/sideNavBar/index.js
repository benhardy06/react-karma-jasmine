import React from 'react';
import './styles.css';
import SideNav from './../sideNav'

class SideNavBar extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
       return(
        <div className="side-nav-bar"><SideNav /></div>
       ) 


    }
}

export default SideNavBar;
