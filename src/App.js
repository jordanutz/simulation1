import React, { Component } from 'react'
import './Reset.css'
import axios from 'axios'
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import routes from './routes.js'

class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
