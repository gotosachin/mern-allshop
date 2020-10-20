const products = require('./data/products')

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('server running')
  })

  app.get('/api/products', (req, res) => {
    res.json(products)
  })

  app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
  })
}
