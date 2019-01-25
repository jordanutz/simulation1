import React from 'react'
import './Product.css'
import {Link} from 'react-router-dom'

const Product = (props) => {

  const {product_id, product_name, price, image_url, deleteProduct} = props

  return (
    <div className="Product">
      <div className="ProductPhoto">
        <img src={image_url} alt="Product" />
      </div>
      <div className="Display">
        <div className="ProductInformation">
          <h1>{product_name}</h1>
          <h2>Price: {price}</h2>
        </div>
        <div className="ProductOptions">

          <Link to={`/edit/${product_id}`}><button>Edit</button></Link>
          <button onClick={() => deleteProduct(product_id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Product
