import cookie from 'react-cookie'
const cartReducer = (state={
    cart : [] ,
    lgShow :false
},action) => {
    switch(action.type){
        case "updateState" :
            state = {
                ...state ,
                cart : cookie.load('cart'),
                lgShow:false
            };
            break
        case "updateCart":
            state = {
                ...state ,
                cart : cookie.load
            }
            break
        case "showModel":
            state = {
                ...state ,
                lgshow:false
            }
            break
    }
    return state
}
export default cartReducer