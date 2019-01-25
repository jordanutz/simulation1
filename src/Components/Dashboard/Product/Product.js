import React from 'react'
import './Product.css'
import {Link} from 'react-router-dom'

const Product = (props) => {

  const {product_id, product_name, price, image_url} = props

  return (
    <div className="Product">
      <div className="ProductPhoto">
        <img src={props.image_url} />
      </div>
      <div className="Display">
        <div className="ProductInformation">
          <h1>{props.product_name}</h1>
          <h2>Price: {props.price}</h2>
        </div>
        <div className="ProductOptions">

          <Link to={`/edit/${product_id}`}><button>Edit</button></Link>
          <button onClick={() => props.deleteProduct(product_id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Product
