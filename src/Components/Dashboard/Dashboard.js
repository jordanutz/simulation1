import React, {Component} from 'react'
import './Dashboard.css'
import axios from 'axios'
import Product from './Product/Product'

class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
      editName: '',
      editPrice: '',
      editImage: '',
      inventory: []
    }
    this.handleEditName = this.handleEditName.bind(this)
  }

  componentDidMount () {
    this.getItems()
  }

  getItems = () => {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  handleEditName (event) {
    this.setState({
      editName: event.target.value
    })
  }

  handleEditPrice =(event) => {
    this.setState({
      editPrice: event.target.value
    })
  }

  handleEditImage = (event) => {
    this.setState({
      editImage: event.target.value
    })
  }

  editProduct = (id, name, price, image) => {

    const inventory = {
      name: name,
      price, price,
      image: image
    }

    axios.put(`/api/inventory${id}`, inventory).then(res => {
      console.log(res)
    })

  }

  deleteProduct = (id) => {
    console.log(id)
    console.log('delete product hit')
    axios.delete(`/api/inventory/${id}`).then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  render () {

    const {handleEditName, handleEditPrice, handleEditImage, editProduct, deleteProduct} = this
    const {editName, editPrice, editImage} = this.state

    const displayedProducts = this.state.inventory.map( (product, index) => {
      return <Product
        key={index}
        {...product}
        editProduct={editProduct}
        deleteProduct={deleteProduct}
        match={this.props.match}
         />
    })

    return (
      <div className="Dashboard">
        {displayedProducts}
      </div>
    )
  }
}

export default Dashboard
