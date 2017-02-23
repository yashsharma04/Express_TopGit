import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import {Nav,NavItem} from 'react-bootstrap'

class Header extends React.Component{
   constructor(props) {
      super(props);
   }
   render(){
      return (
            <div className='header'>
              <i className="fa fa-align-justify left" aria-hidden="true"></i>
              <label>Food Menu</label>
              <i className="fa fa-cart-plus right" aria-hidden="true"></i>
            </div>
         )
   }
}
export default Header 