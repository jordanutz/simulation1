import React, {Component} from 'react'
import './Dashboard.css'
import axios from 'axios'
import Product from './Product/Product'

class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
      inventory: []
    }
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

  editProduct = (id, name, price, image) => {
    const inventory = {
      name: name,
      price: price,
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

    const {editProduct, deleteProduct} = this

    const displayedProducts = this.state.inventory.map( (product, index) => {
      return <Product
        key={product.product_id}
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
