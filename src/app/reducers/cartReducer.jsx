import cookie from 'react-cookie'
const cartReducer = (state={
    cart : [] ,
    val : 0 ,
    lgShow :false
},action) => {
    switch(action.type){
        case "updateState" :
            state = {
                ...state ,
                cart : cookie.load('cart')
            };
            break;
        case "updateCookie":
            state = {
                ...state ,
                cart : action.payload
            };
            break;
        case "showModal":
            state = {
                ...state ,
                lgShow:action.payload
            };
            break;
        case "initialise":
            state= {
                ...state ,
                val : 0 ,
                cart:action.payload.cart ,
                lgShow : action.payload.lgShow
            };
            break;
        case "hideModal":
            state = {
                ...state ,
                lgShow:action.payload
            };
            break;
        case "getCart":
            state = {
                ...state
            };
            break;
        case "setCart":
            state ={
                ...state ,
                cart :action.payload
            };
            break;
        case "curGroupId":
            state ={
                ...state ,
                val : action.payload
            };
            break;
    }
    return state;
};
export default cartReducer