import React, { Component } from 'react'
import { Button } from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



 
class Container extends Component {
		state = {
			Row: "",
			col: ""
		}
			


      
 render() {
	return(
   
//    
<div>
<Container> 
	<Row>
		<Col>Social Media</Col>
		<Col>$200</Col>
		<Col>$400</Col>
		<Col>$600</Col>
		<Col>$800</Col>
		<Col>$1000</Col>
	</Row>
	<Row>
		<Col>Computer Science</Col>
		<Col>$200</Col>
		<Col>$400</Col>
		<Col>$600</Col>
		<Col>$800</Col>
		<Col>$1000</Col>
	</Row>
	<Row>
		<Col>Music</Col>
		<Col>$200</Col>
		<Col>$400</Col>
		<Col>$600</Col>
		<Col>$800</Col>
		<Col>$1000</Col>
	</Row>
	<Row>
		<Col>Games</Col>
		<Col>$200</Col>
		<Col>$400</Col>
		<Col>$600</Col>
		<Col>$800</Col>
		<Col>$1000</Col>
	</Row>
	<Row>
		<Col>Sports</Col>
		<Col>$200</Col>
		<Col>$400</Col>
		<Col>$600</Col>
		<Col>$800</Col>
		<Col>$1000</Col>
	</Row>
	<Row>
		<Col>Brands</Col>
		<Col>$200</Col>
		<Col>$400</Col>
		<Col>$600</Col>
		<Col>$800</Col>
		<Col>$1000</Col>
	</Row>
	 </Container> 
	</div>
 )}
}



export default Container