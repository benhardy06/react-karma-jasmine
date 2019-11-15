import React from 'react'
import './styles.css'
export default class MenuNav extends React.Component{
    constructor(props){
        super(props)

    }



    render(){
        return (
            <nav data-test="navigation">
               <a href="/html/">Link 1</a> 
               <a href="/html/">Link 2</a> 
               <a href="/html/">Link 3</a> 
               <a href="/html/">Link 4</a> 
               <a href="/html/">Link 5</a> 
            </nav> 
        )
    }
}