module.exports = {
  createProduct: (req, res) => {
    const {name, price, image} = req.body
    const db = req.app.get('db')
    db.create_product([name, price, image])
    .then(product => res.status(200).send(product))
    .catch(error => console.log(error))
  },
  getProducts: (req, res) => {
    console.log('hit')
    const db = req.app.get('db')
    db.get_products()
    .then(products => res.status(200).send(products))
    .catch(error => console.log(error))
  },
  deleteProduct: (req, res) => {
    const {id} = req.params
    console.log(id)
    const db = req.app.get('db')
    db.delete_product(id)
    .then(products => res.status(200).send(products))
    .catch(error => console.log(error))
  },
  editProduct: (req, res) => {
    const {id} = req.params
    const {name, price, image} = req.body
    console.log(id, name, price, image)
    const db = req.app.get('db')
    db.edit_product([id, name, price, image])
    .then(products => res.status(200).send(products))
    .catch(error => console.log(error))
  }
}
