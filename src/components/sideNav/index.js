import React from 'react';
import './styles.css';

class SideNav extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }


    render(){

        return (
            <div className="side-nav-icons"><div className="side-nav"></div></div>
        )
    }
}

export default SideNav;