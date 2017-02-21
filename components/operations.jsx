import React from 'react';
class Operations extends React.Component {

	constructor(props){
		super(props);
		console.log("constructor called ",this);
		this.props = props;
		this.state = {
			value1 :'',
			value2 : ''
		};
		// this.handleChange= this.handleChange.bind(this);
		this.handleChange1= this.handleChange1.bind(this);
		this.handleChange2= this.handleChange2.bind(this);
		this.addNumber = this.addNumber.bind(this);
		this.subtract = this.subtract.bind(this);
		this.divide = this.divide.bind(this);
		this.multiply = this.multiply.bind(this);
	} 
	
	handleChange1(event) {
   		this.setState({value1: event.target.value});
  	}
	handleChange2(event) {
   		this.setState({value2: event.target.value});
  	}
	addNumber(){
		this.props.result(Number(this.state.value1) + Number(this.state.value2)); 
	}
	subtract(){
		this.props.result(Number(this.state.value1) - Number(this.state.value2)); 
	}
	divide(){
		this.props.result(Number(this.state.value1) / Number(this.state.value2)); 
	}
	multiply(){
		this.props.result(Number(this.state.value1) * Number(this.state.value2)); 
	}
    render() {
       return (
         <div>
            
         	<input type='text'  value={this.state.value1} onChange={this.handleChange1} placeholder='Value1'/>
            <input type='text'  value={this.state.value2} onChange={this.handleChange2} placeholder='Value2'/>
            <input type='button' value ='+' onClick={this.addNumber}></input>
            <input type='button' value ='-' onClick={this.subtract}></input>
            <input type='button' value ='/' onClick={this.divide}></input>
            <input type='button' value ='*' onClick={this.multiply}></input>
         </div>
      );
   }
}
export default Operations ; 