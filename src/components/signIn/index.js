import React from 'react';
import './styles.css'

export default class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state = {loggedIn:false}
    }

    render(){
        return (
            <div className="sign-in-wrap" data-test="sign-in-wrap"><a href="#sign-in-link" data-test="signin">Sign In</a></div>
        )
    }

}