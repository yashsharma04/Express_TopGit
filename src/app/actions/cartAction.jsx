import cookie from 'react-cookie'
export function updateState(){
    return {
        type : "updateState"
    }
}
export function updateCookie(){
    return {
        type : "updateCart",
        payload : cookie.load('cart')
    }
}
export function showModal(){
    console.log("inside showModal action")
    return {
        type : "showModal",
        payload : true
    }
}
export function hideModal(){
    return {
        type :"hideModal",
        payload : false
    }
}
export function getCart(){
    return {
        type:"getCart"
    }
}
export function setCart(cart){
    console.log("inside setCart",cart)
    return {
        type : "setCart",
        payload : cart
    }
}
export function initialise(){
    return {
        type : "initialise",
        payload:  {
            cart : [],
            lgShow:false
        }
    }
}
export function curGroupId(data){
    return {
        type : "curGroupId",
        payload: data
    }
}