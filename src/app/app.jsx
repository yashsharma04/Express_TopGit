import React from 'react'
import { Router, Route } from 'react-router'
import Header from 'containers/Header.jsx'
import {Nav,NavItem} from 'react-bootstrap'
/**import NavBar from 'containers/NavBar.jsx'
import Content from 'containers/Content.jsx'
import Cart from 'containers/Cart.jsx'
**/
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
            /**<NavBar getData={this.state.val} currentGroupId={this.currentGroupId}/>**/
            /**<Content getData={this.state.val} getCart={this.getCart}/>**/
         </div>
         )
   }
}
export default Home