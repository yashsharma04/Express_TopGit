import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'react-bootstrap'
import Cart from './Cart.jsx'
import cookie from 'react-cookie'

class Header extends React.Component{
   constructor(props) {
      super(props);
      if(cookie.load('cart')==undefined)
        this.state = {
          cart : [],
          lgShow:false
       }
    else 
      this.state = {
        cart : cookie.load('cart'),
        lgShow:false
      }
   }
    // havent changed to redux
   componentWillReceiveProps(nextProps) {
     this.props = nextProps
     if(this.props.cart.length!=0){   
        this.setState({
          cart : this.props.cart
        })
      }
   }
   render(){
      var that = this 
      let lgClose = () => this.setState({ lgShow: false });
      return (
            <div className='container '>
              <div className='header'>
                <i className="fa fa-align-justify left" aria-hidden="true"></i>
                <label>Food Menu</label>
                <Button className='' onClick={()=>this.setState({ lgShow: true })} ><i className="fa fa-cart-plus right" aria-hidden="true"></i></Button>
                <Cart show={this.state.lgShow} onHide={lgClose} getCart={this.state.cart}/>
              </div>
            </div>
         )
   }
}
export default Header