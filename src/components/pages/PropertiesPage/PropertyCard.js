import './PropertiesPage.css';

import { Row, Col, Button} from "react-bootstrap";
import {Link} from 'react-router-dom'

import CustomButton from '../../shared/Buttons/CustomButton';


const PropertyCard = ({name, description, image, _id, owner, loggedUser}) => {

    return(
        <Col md={4}>
            <article className="propertyCard">
                <img src={image} alt={name}/>
                <h5>{name.slice(0, 70)}</h5>
                <p>{description.slice(0, 70)}...</p>

                <div className='btnGroupOwner'>
                        <Link to={`/properties/details/${_id}`} style={{width: '30%'}}>
                            <CustomButton width={'100%'} text={'Details'} variant={'primary'}/>
                            {/* <Button className="btnBlock">Details</Button> */}
                        </Link>
                    { ( loggedUser.role === 'agent' && owner === loggedUser._id ) || loggedUser.role === 'admin'
                    ?
                    <>
                        <CustomButton width={'30%'} text={'Edit'} variant={'warning'}/>
                        <CustomButton width={'30%'} text={'Delete'} variant={'danger'}/>
                    </>
                    // <div className='btnGroupOwner'>
                    //     <Button className="btn45" variant="secondary">Edit</Button>
                    //     <Button className="btn45" variant="danger">Delete</Button> 
                    // </div>
                    :
                    null
                    }
                </div>

            </article>
        </Col>
    )

}

export default PropertyCard