import React from 'react'
import {render} from 'react-dom'
import {Modal,Button,Label} from 'react-bootstrap'
import cookie from 'react-cookie'
import {Link} from 'react-router'

class Cart extends React.Component{
	constructor(props) {
		super(props)
		console.log("Cart Constructor called")
		this.addToCart = this.addToCart.bind(this);
	}
	componentWillMount(){
		console.log("inside will mount ",this.props)
	}
	componentWillReceiveProps(nextProps){

		this.props = nextProps
        console.log("Inside Receive props ",this.props)
	}
	deleteFromCart(id){
		console.log("addtoCart",id)
		var cart = this.props.cartReducer.cart
		for(var i in cart){
			if(cart[i].itemId==id){
				if(cart[i].qty==1){
					cart.splice(i,1);
				}
				else {
					cart[i].qty= cart[i].qty- 1
				}
			}
		}

		this.props.setCart(cart);
        cookie.save('cart',cart,{path:'/'})
	}
	addToCart(id){
		console.log("addToCart",id)
        var cart = this.props.cartReducer.cart
		for(var i in cart){
			if(cart[i].itemId==id){
				cart[i].qty= cart[i].qty + 1 
			}
		}
		this.props.setCart(cart)
        cookie.save('cart',cart,{path:'/'})
	}
	render(){
		var that = this
		var cost = 0
		console.log("before rendering",that.props)
        // console.log(that.props.initialise())
		return (
			<Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-sm">
		        <Modal.Header closeButton>
		          <Modal.Title id="contained-modal-title-sm">Cart</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
		        {
		        	that.props.cartReducer.cart.map(function(item,i){
		        		cost = cost + item.price*item.qty
		        		return (
		        				<div>
		        					<img src={item.img} width="100" height = "100" alt='IMAGE' ></img>
		        					<label> &nbsp;Item Name :{item.name}</label>&nbsp;&nbsp;
		        					<label>  &nbsp;Item Price :{item.price}</label>&nbsp;&nbsp;
		        					<label>  &nbsp;Item Qty :{item.qty}</label> &nbsp;&nbsp;
		        					<Button onClick={() => that.addToCart(item.itemId)}><i className="fa fa-plus right" aria-hidden="true"></i></Button>
		        					<Button onClick={() => that.deleteFromCart(item.itemId)}><i className="fa fa-minus" aria-hidden="true"></i></Button>
		        				</div>
		        				
		        			)
		        	})
		        }
		        <label>Total Cost : {cost}</label>
		        </Modal.Body>
		        <Modal.Footer>
		        <Button onClick={this.props.onHide}>Close</Button>
                <Button >
                    <Link to="/checkout">Checkout</Link></Button>
		        </Modal.Footer>
		      </Modal>
			)
	}
}
export default Cart 