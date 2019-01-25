import React, {Component} from 'react'
import './Form.css'
import axios from 'axios'

class Form extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      price: '',
      image: '',
      product: {}
    }
  }


  componentDidMount () {
    axios.get(`/api/inventory/${this.props.match.params.id}`).then(res => {
      console.log(res.data)
      this.setState({
        product: res.data[0]
      })
    })
  }

  inputName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  inputPrice = (event) => {
    this.setState({
      price: event.target.value
    })
  }

  inputImage = (event) => {
    this.setState({
      image: event.target.value
    })
  }

  submitProduct = (name, price, image) => {
    const product = {
      name: name,
      price: price,
      image: image
    }
    axios.post('/api/inventory', product).then( res => {
    })
    this.goBack()
  }

  resetForm = () => {
    console.log('hit')
    this.setState({
      name: '',
      price: '',
      image: ''
    })
    this.goBack()
  }

  submitEdit = (id, name, price, image) => {

    const editProduct = {
      name: name,
      price: price,
      image: image
    }

    axios.put(`/api/inventory/${id}`, editProduct).then(res => {
      console.log(res)
    })
    this.goBack()
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render () {


    const {name, price, image} = this.state
    const {inputPrice, inputName, inputImage, resetForm, submitProduct, submitEdit} = this
    console.log(this.state.product)

    const submitButton = this.props.match.path === '/add' ?
    <button onClick={() => submitProduct(name, price, image)}>Add to Inventory</button> :
    <button onClick={() => submitEdit(this.props.match.params.id, name, price, image)}>Submit Changes</button>


    const displayPhoto = this.state.image ?
    <img id="DisplayPhoto" src={this.state.image} />
    : 'Please insert a photo!'

    return (
      <div className="Form">
        <h1>Product Input</h1>
        {displayPhoto}
        <div className="FormInput">
          <h2>Image URL:</h2><input placeholder={this.state.product.image_url} value={image} onChange={inputImage} />
          <h2>Name:</h2><input placeholder={this.state.product.product_name} value={name} onChange={inputName}/>
          <h2>Price:</h2><input placeholder={this.state.product.price} value={price} onChange={inputPrice}/>
        </div>
        <div className="FormOptions">
          <button onClick={() => resetForm()}>Cancel</button>
          {submitButton}
        </div>
      </div>
    )
  }
}

export default Form
