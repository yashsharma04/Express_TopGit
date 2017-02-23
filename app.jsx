import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import {Nav,NavItem} from 'react-bootstrap'
import Header from './Components/Header.jsx'
import NavBar from './Components/NavBar.jsx'
import Content from './Components/Content.jsx'

class Home extends React.Component {
   constructor(props){
      super(props);
   }
   render(){
      return (
         <div>
            <Header/>
            <NavBar/> 
            <Content/>
         </div>
         )
   }
}

export default Home