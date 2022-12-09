import express from 'express';
import products from './data/products';

const app = express();
app.get('/api/products', (req, res) => {
  
  res.json(products);
})

app.get('/api/product/:id', (req, res) => {
 const product = products.find((p) => p._id == req.params.id)
   
  res.json(product);
})


app.listen(8000, (console.log('Server started in port 8000')));
