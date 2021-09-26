import {Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const IndexPage = () => {

    return (
        <Container>

            <h1>Welcome to Maya Real Estate</h1>
            <p>Perseverence leads to inspiration</p>
            <Link to={`/properties`}>
                    <Button className="btnBlock">All Properties</Button>
            </Link>

        </Container>
        
    )
}

export default IndexPage