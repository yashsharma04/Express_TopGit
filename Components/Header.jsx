import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component{
   constructor(props) {
      super(props);
   }
   render(){
      return (
            <div className='container '>
              <div className='header'>
                <i className="fa fa-align-justify left" aria-hidden="true"></i>
                <label>Food Menu</label>
                <i className="fa fa-cart-plus right" aria-hidden="true"></i>
              </div>
            </div>
         )
   }
}
export default Header 