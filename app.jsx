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
      this.props = props ; 
      this.state = {
         val:0
      }
      this.currentGroupId= this.currentGroupId.bind(this);
      var that = this; 
   }
   currentGroupId(data){
      this.setState({
         val :data 
      })
   }
   getCart(data){
      
   }
   render(){
      return (
         <div>
            <Header/>
            <NavBar getData={this.state.val} currentGroupId={this.currentGroupId}/> 
            <Content getData={this.state.val} getCart={this.getCart}/>
         </div>
         )
   }
}
export default Home