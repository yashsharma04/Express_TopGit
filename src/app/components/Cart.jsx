import React from 'react'
import ReactDOM from 'react-dom'
import {Modal,Button,Label} from 'react-bootstrap'
import cookie from 'react-cookie'

class Cart extends React.Component{
	constructor(props) {
		super(props)
		console.log("Cart Constructor called")
		if(cookie.load('cart')==undefined)
			this.state = {
				cart : []
			}
		else 
			this.state = {
				cart : cookie.load('cart')
			}
		this.props = props
		this.addToCart = this.addToCart.bind(this);
	}
	componentWillReceiveProps(nextProps){
		console.log("Inside Receive props ")
		this.props = nextProps
		this.setState({
			cart : this.props.getCart
		})
	}
	deleteFromCart(id){
		console.log("addtoCart",id)
		var cart = this.state.cart 
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
		this.setState({
			cart:cart
		})
	}
	addToCart(id){
		console.log("deleteFromCart",id)
		var cart = this.state.cart 
		for(var i in cart){
			if(cart[i].itemId==id){
				cart[i].qty= cart[i].qty + 1 
			}
		}
		this.setState({
			cart:cart
		})

	}
	render(){
		var that = this
		var cost = 0 
		return (
			<Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-sm">
		        <Modal.Header closeButton>
		          <Modal.Title id="contained-modal-title-sm">Cart</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
		        {
		        	this.state.cart.map(function(item,i){
		        		cost = cost + item.price*item.qty
		        		return (
		        				<div>
		        					<img src={item.img} width="100" height = "100" alt='IMAGE' ></img>
		        					<label> &nbsp;Item Name :{item.name}</label>
		        					<label>  &nbsp;Item Price :{item.price}</label>
		        					<label>  &nbsp;Item Qty :{item.qty}</label> &nbsp;
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
		        </Modal.Footer>
		      </Modal>
			)
	}
}
export default Cart 