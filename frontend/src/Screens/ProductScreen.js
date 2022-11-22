import React from "react";
import { Row, Col, ListGroup, ListGroupItem, Image, Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import products from "../products";
import ProductStyle from '../css/ProductStyle.css';
import Rating from "../Components/Rating";


const ProductScreen = () => {
  const params = useParams();
  console.log(`Params :: ${JSON.stringify(params)}`);
  const product = products.find(p => p._id === params._id);
  return (
    <>
      <Link className="className='btn btn-light my-3" to='/'>
        Go Back
      </Link>
      <Row className="prodscrn-row">
        <Col className="prodscrn-col" md={6} style = {ProductStyle.col} >
          <Image src = {product.image}  alt = {product.name} fluid/>
        </Col>
       
        <Col className="md-3 prodscrn-col" md = {3}>
          <ListGroup variant="flush" >
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating 
                value = {product.rating}
                text = {`${product.numReviews} reviews`} 
              />
            </ListGroupItem>
            <ListGroupItem>Price :${product.price} </ListGroupItem>
            <ListGroupItem>Description : {product.description}</ListGroupItem>
          </ListGroup>
        </Col>

         <Col className="md-3 prodscrn-col" md = {3}>
          <Card>
           <ListGroup>
            <ListGroupItem>
              <Row>
                <Col>
                  Price: 
                </Col>
                <Col>
                  <strong> ${product.price} </strong>
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>Status: </Col>
                <Col>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
              </Row>
            </ListGroupItem>
           </ListGroup>
           <ListGroupItem>
              <div class="d-grid gap-2 d-md-block">
                <button class="btn btn-primary" 
                type="button" disabled = {product.countInStock === 0}>Add to Cart</button>
              </div>
           </ListGroupItem>
          </Card>
          
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen;