import React from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from '../store.jsx'
import {Media} from 'react-bootstrap'
class Checkout extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(props){
        this.props = props
    }

    render(){
        var that = this
        var cost = 0
        console.log("before rendering",that.props)
        return (

            <div className="body">
                <div className="header">
                    <h1 className='center'>
                        Checkout
                    </h1>
                </div>
                {
                    that.props.cartReducer.cart.map(function(item,i){
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

                                                Qty : {item.qty}


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

                <label>Total Cost : {cost}</label><br/>
                <Button className="btn1">
                    <Link className="btn1 font-cart" to="/cart">Cancel</Link>
                </Button>
                <Button className="btn1">
                    <Link className="btn1 font-cart" to="*">Complete Payment</Link>
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
export  default connect(mapStateToProps,mapDispatchToProps)(Checkout);