import React from 'react';
import './styles.css';
import SideNav from './../sideNav'

class SideNavBar extends React.Component{
    constructor(props){
        super(props)
        this.state={current:'', links:this.props.links}
    }

    render(){
        const links= this.state.links.map(link => <SideNav title={link} />)
       return(
        <div className="side-nav-bar">{links}</div>
       ) 


    }
}

export default SideNavBar;
