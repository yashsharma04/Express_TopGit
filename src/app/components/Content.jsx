import React from 'react'
import ReactDOM from 'react-dom'
import {Grid,Row,Col} from 'react-bootstrap'
import {Thumbnail,Button} from 'react-bootstrap'
import cookie from 'react-cookie';

class Content extends React.Component{
	constructor(props) {
		super(props);
		console.log("cart :",cookie.load('cart'))
		if(cookie.load('cart')==undefined)
			this.state = {
				items : [],
				groups :[],
				curItems : [],
				cart :[]
			}
		else 
			this.state = {
				items : [],
				groups :[],
				curItems : [],
				cart :cookie.load('cart')
			}
		this.getContent = this.getContent.bind(this)
		this.getContent()
	}
	componentWillReceiveProps(nextProps){
		this.props = nextProps
		this.getContent()
	}
	getContent(){
		if(this.state.items.length!=0){
			var curGroupId = this.props.getData;
		    var items = this.state.items ;
		    var curItems= []; 
		    for(var i in items){
		    	if(items[i].food_group_id==curGroupId){
		      		curItems.push(items[i]);
		      	}
		    }
		    this.setState({
		     	curItems : curItems
		    })	
		}
		else{
			$.getJSON('http://ec2-54-165-240-14.compute-1.amazonaws.com:3000/api/foodItem').then((data)=>{
		      this.setState({
		        items : data,
		      });
		      var curGroupId = this.props.getData;
		      var items = this.state.items ;
		      var curItems= []; 
		      for(var i in items){
		      	if(items[i].food_group_id==curGroupId){
		      		curItems.push(items[i]);
		      	}
		      }
		      this.setState({
		      	curItems : curItems
		      })
		    });			
		}
	}
	addToCart(id){
		var items = this.state.items;
		var cart = this.state.cart 
		var price = 0
		var obj = {}
		for(var i in items){
			if(items[i].food_item_id==id){
				obj = items[i]
			}
		}
		var count = 0 
		for(var i in cart){
			if(cart[i].itemId==id){
				count =1 
				cart[i].qty=cart[i].qty+1 
			}
		}
		if(count==0){
			cart.push({
				"itemId": id ,
				"qty" : 1,
				"price":obj.food_item_price,
				"img":obj.food_item_pic,
				"name":obj.food_item_name
			});	
		}
		this.setState({
			cart:cart
		})
		cookie.save('cart',cart,{path:'/'})
		this.props.getCart(cart)
	}
	render(){
		var that = this ;
		return (
			  <Grid>
			    <Row>
			    {
			    	this.state.curItems.map(function(item,i){
				    	return (
				    		<div>
				    			<Col xs={6} md={3}>
							      <Thumbnail src={item.food_item_pic} alt="242x200">
							        <h3>{item.food_item_name}</h3>
							        <p>${item.food_item_price}</p>
							        <p>
							          <Button key={item.food_item_id} bsStyle="default" onClick={() => that.addToCart(item.food_item_id)}>ADD</Button>
							        </p>
							      </Thumbnail>
							    </Col>	
							    </div>	
				    		);
				    })
			    }
			    </Row>
			  </Grid>
			)
	}
}
export default Content 