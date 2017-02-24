import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'react-bootstrap'
import Cart from './Cart.jsx';

class Header extends React.Component{
   constructor(props) {
      super(props);
      this.state = {
        cart : [],
        lgShow:false
      }
   }
   componentWillReceiveProps(nextProps) {
     this.props = nextProps
     var cart = []
     if(this.props.cart.length!=0){
        cart = this.props.cart 
        this.setState({
          cart : cart 
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
                <Button className='right' onClick={()=>this.setState({ lgShow: true })} ><i className="fa fa-cart-plus right" aria-hidden="true"></i></Button>
                <Cart show={this.state.lgShow} onHide={lgClose} getCart={this.state.cart}/>
              </div>
            </div>
         )
   }
}
export default Header