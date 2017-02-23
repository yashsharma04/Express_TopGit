import React from 'react'
import ReactDOM from 'react-dom'
import {Grid,Row,Col} from 'react-bootstrap'
import {Thumbnail,Button} from 'react-bootstrap'

class Content extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			items : [],
			groups :[],
			curItems : []
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
	render(){
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
							        <p>Description</p>
							        <p>
							          <Button bsStyle="default">ADD</Button>
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