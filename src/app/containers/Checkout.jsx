import React from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router'

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
        console.log("Before rendering",that.props)
        return (
                    <div className = 'center'>
                        <h1>
                            Checkout
                        </h1>
                    {
                        that.props.cartReducer.cart.map(function(item,i){
                            cost = cost + item.price*item.qty
                            return (
                                <div>
                                    <img src={item.img} width="100" height = "100" alt='IMAGE' ></img>
                                    <label> &nbsp;Item Name :{item.name}</label>
                                    <label>  &nbsp;Item Price :{item.price}</label>
                                    <label>  &nbsp;Item Qty :{item.qty}</label> &nbsp;
                                    <br/><br/>
                                </div>
                            )
                        })
                    }
                    <label>Total Cost : {cost}</label><br/>
                    <Button >
                        <Link to="/">Cancel</Link>
                    </Button>
                    <Button >
                        <Link to="*">Complete Payment</Link>
                    </Button>
                    </div>
        )
    }
}
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