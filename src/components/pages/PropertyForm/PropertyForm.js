import { Component, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import PropertiesService from '../../../services/properties.services'
import UploadsService from '../../../services/uploads.services'
import Spinner from '../../shared/Spinner'

const PropertyForm = (props) =>  {

    const [propertyInput, setPropertyInput] = useState({
            name: '',
            description: '',
            type: '',
            status: '',
            autonomousCommunity: '',
            city: '',
            size: '',
            rooms: '',
            bathrooms: '',
            price: '',
            discountedPrice: '',
            image: '',
            owner: ''
    })

    console.log(props.loggedUser._id)

    const [loading, setLoading] = useState(false)

    const propertiesService = new PropertiesService()
    const uploadsService = new UploadsService()

    const handleInputChange = e => {
        const { name, value } = e.target

        // React SCHEDULES state updates, does not perform them instantly ==> if more updates scheduled, wrong state might be used
        // INSTEAD OF:

        // setPropertyInput({
        //     ...propertyInput,
        //     [name]: value
        // })

        // WE USE:

        setPropertyInput((prevPropertyInput) => {
            return { ...prevPropertyInput, [name]: value }
        } )

        // and React GUARANTEES the latest state will be used

        // IF STATE UPDATE DEPENDS ON THE PREVIOUS STATE, USE THE ARROW FUNCTION
    }


    const handleFormSubmit = e => {
        e.preventDefault()

        setPropertyInput((prevPropertyInput) => {
            return { ...prevPropertyInput, owner: props.loggedUser._id }
        } )

        propertiesService
            .saveProperty(propertyInput)
            .then(() => {
                setPropertyInput({
                    name: '',
                    description: '',
                    type: '',
                    status: '',
                    autonomousCommunity: '',
                    city: '',
                    size: '',
                    rooms: '',
                    bathrooms: '',
                    price: '',
                    discountedPrice: '',
                    image: ''
                })
                props.history.push('/properties')
            })
            .catch(err => console.log(err))
    }


    const handleFileUpload = e => {

        setLoading(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadsService
            .uploadImage(uploadData)
            .then(response => {

                setPropertyInput((prevPropertyInput) => {
                    return { ...prevPropertyInput, image: response.data.cloudinary_url }
                } )

                setLoading(false)



                // this.setState({
                //     loading: false,
                //     coaster: { ...this.state.coaster, imageUrl: response.data.cloudinary_url }
                // })
            })
            .catch(err => console.log(err))
    }


        return (
            <Container>
                <Row>
                    <Col md={{span: 6, offset: 3}}>

                        <h1>New Property</h1>

                        <hr></hr>

                        <Form onSubmit={handleFormSubmit}>

                            <Form.Group controlId="name">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" value={propertyInput.name} onChange={handleInputChange} name="name" />
                            </Form.Group>

                            <Form.Group controlId="desc">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" value={propertyInput.description} onChange={handleInputChange} name="description" />
                            </Form.Group>

                            <Form.Group controlId="inve">
                                <Form.Label>Type</Form.Label>
                                <Form.Control type="text" value={propertyInput.type} onChange={handleInputChange} name="type" />
                            </Form.Group>

                            <Form.Group controlId="status">
                                <Form.Label>Status</Form.Label>
                                <Form.Control type="text" value={propertyInput.status} onChange={handleInputChange} name="status" />
                            </Form.Group>

                            <Form.Group controlId="autonomousCommunity">
                                <Form.Label>Autonomous Community</Form.Label>
                                <Form.Control type="text" value={propertyInput.autonomousCommunity} onChange={handleInputChange} name="autonomousCommunity" />
                            </Form.Group>

                            <Form.Group controlId="city">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" value={propertyInput.city} onChange={handleInputChange} name="city" />
                            </Form.Group>

                            <Form.Group controlId="size">
                                <Form.Label>Size</Form.Label>
                                <Form.Control type="text" value={propertyInput.size} onChange={handleInputChange} name="size" />
                            </Form.Group>

                            <Form.Group controlId="rooms">
                                <Form.Label>Rooms</Form.Label>
                                <Form.Control type="text" value={propertyInput.rooms} onChange={handleInputChange} name="rooms" />
                            </Form.Group>

                            <Form.Group controlId="bathrooms">
                                <Form.Label>Bathrooms</Form.Label>
                                <Form.Control type="text" value={propertyInput.bathrooms} onChange={handleInputChange} name="bathrooms" />
                            </Form.Group>

                            <Form.Group controlId="price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" value={propertyInput.price} onChange={handleInputChange} name="price" />
                            </Form.Group>

                            <Form.Group controlId="discountedPrice">
                                <Form.Label>Discounted Price</Form.Label>
                                <Form.Control type="text" value={propertyInput.discountedPrice} onChange={handleInputChange} name="discountedPrice" />
                            </Form.Group>

                            {/* <Form.Group controlId="image">
                                <Form.Label>Imagen (URL)</Form.Label>
                                <Form.Control type="text" value={propertyInput.image} onChange={handleInputChange} name="image" />
                            </Form.Group> */}

                            <Form.Group controlId="image">
                                <Form.Label>Upload Local Image</Form.Label>
                                <Form.Control type="file" onChange={handleFileUpload} />
                            </Form.Group>

                            <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit" disabled={loading} >          
                                {loading ? <Spinner size={30}/>  : null}
                                {loading ? 'Uploading image...' : 'Create property'} 
                            </Button>

                        </Form>                        
                    </Col>
                </Row>

            </Container>
        )

}

export default PropertyForm