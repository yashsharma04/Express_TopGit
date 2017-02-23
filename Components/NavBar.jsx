import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import {Nav,NavItem} from 'react-bootstrap'

class NavBar extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
      groups :[],
      active :0
    };
      this.list();
      this.handleSelect= this.handleSelect.bind(this);
   }
   list(){
    $.getJSON('http://ec2-54-165-240-14.compute-1.amazonaws.com:3000/api/foodGroup').then((data)=>{

      this.setState({
        groups : data,
        active : 0
      });
    });
   }
   handleSelect(selectedKey) {
      alert('selected ' + selectedKey) ;
      this.setState({
        active:selectedKey
      }) 
   }
   render(){
      return (
            <div className='color'>
              <Nav bsStyle="pills" activeKey={this.state.active} onSelect={this.handleSelect}>
              {
                this.state.groups.map(function(group,i){
                  return  (<NavItem className= 'color' key = {i} eventKey={i}>{group.food_group_name}</NavItem>);
                })
              }
             </Nav>
           </div>
         )
   } 
}
export default NavBar ;