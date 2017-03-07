import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'react-bootstrap'
import Cart from './Cart.jsx'
import cookie from 'react-cookie'

import {Link} from 'react-router'

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

                <Button className='right'><Link to="/cart"><i className="fa fa-cart-plus right" aria-hidden="true"></i></Link></Button>
                
              </div>
            </div>
         )
   }
}
export default Header