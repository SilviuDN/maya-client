import { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Routes from './Routes'
import Footer from './layout/Footer/Footer';
import Navigation from './layout/Navigation/Navigation';
import AuthService from '../services/auth.services'

// function App() {
//   return (
//     <>
//       <Navigation/>
//       <Routes/>
//       <Footer/>
//     </>

//   );
// }


class App extends Component {

  constructor() {
    super()
    this.state = { loggedUser: undefined }
    this.authService = new AuthService()
  }

  storeUser = loggedUser => this.setState({ loggedUser })

  fetchUser = () => {
    this.authService
      .isLoggedIn()
      .then(theLoggedUser => this.storeUser(theLoggedUser.data))
      .catch(() => this.storeUser(undefined))
  }

  componentDidMount = () => this.fetchUser()

  render() {

    return (
      <>
        <Navigation storeUser={this.storeUser} loggedUser={this.state.loggedUser} />

        <Routes storeUser={this.storeUser} loggedUser={this.state.loggedUser} />

        <Footer />
      </>
    )
  }
}

export default App;
