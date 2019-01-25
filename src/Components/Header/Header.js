import React from 'react'
import './Header.css'
import Icon from './assets/shelfie_icon.png'
import {Link} from 'react-router-dom'

const Header = (props) => {
  return (
    <header>
      <div className="Icon">
        <img src={Icon} />
        <h1>Shelfie</h1>
      </div>
      <div className="UserOptions">
        <Link to='/'><button>Dashboard</button></Link>
        <Link to='/add'><button>Add Inventory</button></Link>
      </div>
    </header>
  )
}

export default Header
