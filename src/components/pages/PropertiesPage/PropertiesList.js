import { Component } from "react";
import PropertiesService from "../../../services/properties.services";

import { Row } from 'react-bootstrap'
import PropertyCard from "./PropertyCard";

class PropertiesList extends Component{

    constructor(){
        super()
        this.state = {
            properties: undefined
        }
        this.propertiesService = new PropertiesService()
    }

    loadProperties = () => {
        this.propertiesService
            .getAllProperties()
            .then( res => this.setState({properties: res.data}))
            .catch( err => console.log(err))
    }

    componentDidMount = () => {
        this.loadProperties()
    }

    render(){

        const propertiesList = !this.state.properties
            ?
            <h1>waiting...</h1>
            :
            <Row>
                {this.state.properties?.map( elm => <PropertyCard key = {elm._id} {...elm} loggedUser={this.props.loggedUser}/>)}
            </Row>

        return(
            <>
                {propertiesList}
            </>
            
            
        )
    }
}

export default PropertiesList