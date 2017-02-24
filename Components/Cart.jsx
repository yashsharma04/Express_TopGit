import React from 'react'
import ReactDOM from 'react-dom'
import {Modal,Button,Label} from 'react-bootstrap'
class Cart extends React.Component{
	constructor(props) {
		super(props)
		console.log("Cart Constructor called")
		this.state = {
			cart : []
		}
		this.props = props 

	}
	componentWillReceiveProps(nextProps){
		console.log("Inside Receive props ")
		this.props = nextProps
		this.setState({
			cart : this.props.getCart
		})
	}
	render(){
		var that = this
		var cost =0 
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
		        					<label>  &nbsp;Item Qty :{item.qty}</label>
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