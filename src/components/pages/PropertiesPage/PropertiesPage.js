import {Container} from 'react-bootstrap'
import PropertiesList from './PropertiesList'

const PropertiesPage = (loggedUser) => {

    return(
        <Container>
            <h1>Properties list goes here</h1>
            <PropertiesList  loggedUser={loggedUser}/>
            <p style={{marginBottom: '3rem'}}></p>
        </Container>
    )
}

export default PropertiesPage