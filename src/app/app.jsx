import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import {Nav,NavItem} from 'react-bootstrap'
import Header from 'components/Header.jsx'
import NavBar from 'components/NavBar.jsx'
import Content from 'components/Content.jsx'
import Cart from 'components/Cart.jsx'

class Home extends React.Component {
   constructor(props){
      super(props);
      this.props = props;
      this.state = {
         val:0,
         cart:[]
      }
      this.currentGroupId= this.currentGroupId.bind(this)
      this.getCart = this.getCart.bind(this)
   }
   currentGroupId(data){
      this.setState({
         val :data 
      })
   }
   getCart(data){
      console.log("App.jsx:  ",data)
      this.setState({
         cart:data
      })
   }
   render(){
      return (
         <div>
            <Header cart = {this.state.cart}/>
            <NavBar getData={this.state.val} currentGroupId={this.currentGroupId}/> 
            <Content getData={this.state.val} getCart={this.getCart}/>
         </div>
         )
   }
}
export default Home