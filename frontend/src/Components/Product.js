import React from "react";
import { Card, Alert } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Rating from './Rating';



const Product = ({product}) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top'/>
       </Link> 
        <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'> 
          <strong>{product.name}</strong>
          </Card.Title>
        </Link>
          <Card.Text as = 'div'> 
           <Rating 
            value = {product.rating}
            text = {`${product.numReviews}  reviews`}
           />
          </Card.Text>
          <Card.Text as = 'div' >
           <h3 className="h3-prdct-price"> ${product.price}</h3>
          </Card.Text>
        </Card.Body>
      </Card>
   
    
    </>
  )
}


export default Product;