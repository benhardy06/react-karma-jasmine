import React from 'react'
import './styles.css'
import PropTypes from 'prop-types';

class MenuNav extends React.Component{
    constructor(props){
        super(props)
        this.state= {selected:'', links:this.props.links}
    }


    clickLink(link){
        this.setState(state=>({
            selected:link
        }))
    }


    render(){
        if(!this.props.links){
            return null;
        }
        const links = this.state.links.map((link,i)=>
                <a key={link} onClick={(e)=>this.clickLink(link, e)} href={'#' + link} className={`navigation-element ${this.state.selected===link?'clicked-state':'base-state'}`} data-test="navigation-element">{link}</a> 
            )
        return (
            <nav data-test="navigation">
                {links}
            </nav> 
        )
    }
}
MenuNav.propTypes = {
    links: PropTypes.array
}

export default MenuNav