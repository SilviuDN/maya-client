import { Component } from "react";
import PropertiesService from "../../../services/properties.services";

import { Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class PropertyDetails extends Component{

    constructor(){
        super()
        this.state = {
            property: undefined,
        }
        this.propertyService = new PropertiesService()
    }

    componentDidMount(){
        const {property_id} = this.props.match.params
        this.propertyService
            .getProperty(property_id)
            .then( res => this.setState({property: res.data}))
            .catch( err => console.log(err))
    }

    render(){

        console.log(this.state.property, this.props.loggedUser?._id)


        return(
            !this.state.property
            ?
            <h4>waiting...</h4>
            :
            <>
            <Row className="justify-content-around">
                <Col md={6}>
                    <h1>{this.state.property.name}</h1>
                    <p>{this.state.property.description}</p>

                    <hr></hr>
                    
                    <Link to="/properties" className="btn btn-dark">Properties</Link>



                </Col>

                <Col md={4}>
                    <img src={this.state.property.image} alt={this.state.property.name} style={{ width: '100%' }} />
                </Col>
            </Row>

            </>

        )
    }

}

export default PropertyDetails