import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import {Grid,Row,Col} from 'react-bootstrap'

class Content extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<Grid>
			    <Row className="show-grid">
			      <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
			      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
			    </Row>
			</Grid>
			)
	}
}
export default Content 