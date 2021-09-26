import { Switch, Route } from 'react-router'
import IndexPage from '../pages/IndexPage/IndexPage'
import PropertiesPage from '../pages/PropertiesPage/PropertiesPage'
import PropertyDetails from '../pages/PropertyDetails/PropertyDetails'
import PropertyForm from '../pages/PropertyForm/PropertyForm'
import SignUp from '../pages/SignUp/SignUp'
import LogIn from '../pages/LogIn/LogIn'


const Routes = ({ storeUser, loggedUser }) => {

    return(
        <>
            <Switch>
                <Route path = '/' exact render = { () => <IndexPage/>} />
                <Route path = '/properties' exact render = { () => <PropertiesPage  {...loggedUser}/> } />               
                <Route path = '/properties/details/:property_id' render = { props => <PropertyDetails {...props} loggedUser = {loggedUser}/> } />
                <Route path = '/properties/new' render = { (props) => <PropertyForm {...props} loggedUser = {loggedUser}/> } />
                <Route path = '/signup' render = { (props) => <SignUp {...props} /> } />
                <Route path = '/login' render = { (props) => <LogIn {...props} storeUser={storeUser} /> } />
            </Switch>
        </>        
    )
}

export default Routes