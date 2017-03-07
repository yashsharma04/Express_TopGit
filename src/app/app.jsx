import React from 'react'
import Header from './containers/Header.jsx'
import {connect} from 'react-redux'
import {initialise,updateState,showModal,hideModal,setCart,curGroupId} from "./actions/cartAction.jsx"
import NavBar from './containers/NavBar.jsx'
import Content from './containers/Content.jsx'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import store from './store.jsx'
import { Router, Route, browserHistory } from 'react-router'

class Home extends React.Component {
   constructor(props){
      super(props);
       console.log(props)
   }
    componentWillReceiveProps(props){
        this.props = props
    }

   render(){
      return (
         <div>
            <Header updateState={()=>this.props.updateState()}  showModal={()=>this.props.showModal()} initialise= {()=>this.props.initialise()} hideModal = {()=>this.props.hideModal()}  setCart = {(cart)=>this.props.setCart(cart)}  curGroupId = {()=>this.props.curGroupId()} cartReducer={this.props.cartReducer}/>
             <NavBar updateState={()=>this.props.updateState()} showModal={()=>this.props.showModal()} initialise= {()=>this.props.initialise()} hideModal = {()=>this.props.hideModal()}  setCart = {(cart)=>this.props.setCart(cart)}  curGroupId = {(id)=>this.props.curGroupId(id)} cartReducer={this.props.cartReducer}/>
             <Content updateState={()=>this.props.updateState()} showModal={()=>this.props.showModal()} initialise= {()=>this.props.initialise()} hideModal = {()=>this.props.hideModal()}  setCart = {(cart)=>this.props.setCart(cart)}  curGroupId = {(id)=>this.props.curGroupId(id)} cartReducer={this.props.cartReducer}/>
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
export  default connect(mapStateToProps,mapDispatchToProps)(Home);