import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'react-bootstrap'
import Cart from './Cart.jsx'
import cookie from 'react-cookie'

class Header extends React.Component{
   constructor(props) {
      super(props);

   }
    componentWillMount(){
        console.log("inside header ",this.props)
        if(cookie.load('cart')==undefined)
            this.props.initialise()
        else
            this.props.updateState()
    }
   // haven't changed to redux
   componentWillReceiveProps(nextProps) {
     this.props = nextProps
       console.log(this.props.cartReducer)
   }
   render(){
      var that = this;
      let lgClose = () => this.props.hideModal();
      return (
            <div className='container '>
              <div className='header'>
                <i className="fa fa-align-justify left" aria-hidden="true"></i>
                <label>Food Menu</label>
                <Button className='right' onClick={()=>this.props.showModal()}><i className="fa fa-cart-plus right" aria-hidden="true"></i></Button>
                <Cart show={this.props.cartReducer.lgShow} onHide={lgClose} updateState={this.props.updateState} updateCookie={this.props.updateCookie} showModal={this.props.showModal} initialise= {this.props.initialise} hideModal = {this.props.hideModal}  setCart = {this.props.setCart} getCart = {this.props.getCart} curGroupId = {this.props.curGroupId} cartReducer = {this.props.cartReducer}/>
              </div>
            </div>
         )
   }
}
export default Header