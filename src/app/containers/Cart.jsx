import React from 'react'
import {render} from 'react-dom'
import {Modal,Button,Label} from 'react-bootstrap'
import cookie from 'react-cookie'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {initialise,updateState,showModal,hideModal,setCart,curGroupId} from "../actions/cartAction.jsx"
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import store from '../store.jsx'
import {Media} from 'react-bootstrap'


class Cart extends React.Component{
	constructor(props) {
		super(props)
		console.log("Cart Constructor called")
		this.addToCart = this.addToCart.bind(this);
	}
	componentWillMount(){
		console.log("inside will mount ",this.props)
	}
    componentDidMount(){
        this.props.setCart(cookie.load('cart'))
    }
	componentWillReceiveProps(nextProps){

		this.props = nextProps
        console.log("Inside Receive props ",this.props)
	}
	deleteFromCart(id){
		console.log("deltefromCart",id)
        var cart = cookie.load('cart')
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
        var cart = cookie.load('cart')
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
		return (

                    <div className="body">
                        <div className="header">
                            <h1 className='center'>
                                MyCart({cookie.load('cart').length})
                            </h1>
                        </div>

					{
						cookie.load('cart').map(function(item,i){
							cost = cost + item.price*item.qty
							return (
								<div className="cart-left">




                                    <div>
                                        <Media>
                                            <Media.Left align="top">
                                                <img width={100} height={100} src={item.img} alt="Image"/>
                                            </Media.Left>
                                            <Media.Body>
                                                <label>  &nbsp;{item.name}</label>&nbsp;&nbsp;<br/>
                                                <label>  &nbsp;Rs {item.price}</label>&nbsp;&nbsp;<br/>
                                                <div className="align">
                                                    <Button className="only-left" onClick={() => that.addToCart(item.itemId)}><i className="fa fa-plus right" aria-hidden="true"></i></Button>&nbsp;&nbsp;
                                                    <input className="txt" type="text" value={item.qty} disabled="true"></input>&nbsp;&nbsp;

                                                    <Button className="only-left" onClick={() => that.deleteFromCart(item.itemId)}><i className="fa fa-minus" aria-hidden="true"></i></Button>
                                                 </div>
                                                <div className="delivery">
                                                    <label>Free Delivery</label>
                                                </div>
                                                <br/>
                                            </Media.Body>
                                        </Media>
                                    </div>
								</div>

							)
						})
					}

		        <label>Total Cost : Rs {cost}</label>
                        <br/><br/>
                <Button className="btn1">
                    <Link className="btn1 font-cart"to="/">Continue Shopping</Link>
                </Button>
                <Button className="btn1">
                    <Link className="btn1 font-cart"to="/checkout">Place Order</Link>
				</Button>
             </div>
			)
	}
}
const history = syncHistoryWithStore(browserHistory, store)
const mapStateToProps = (state) => {
    return {
        cartReducer: state.cartReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateState : () => {
            dispatch(updateState())
        },
        showModal : ()=>{
            dispatch(showModal())
        },
        initialise : ()=>{
            dispatch(initialise())
        },
        hideModal : ()=>{
            dispatch(hideModal())
        },
        setCart : (data)=>{
            dispatch(setCart(data))
        },
        curGroupId : (data)=>{
            dispatch(curGroupId(data))
        }
    };
};
export  default connect(mapStateToProps,mapDispatchToProps)(Cart);