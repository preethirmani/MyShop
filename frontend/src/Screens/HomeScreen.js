import React from "react";
import { Row, Col, Alert } from "react-bootstrap";

import Product from "../Components/Product";
import products from "../products";


const HomeScreen = () => {
  return (
     <>
      <Row>
        
         {
          products.map((prod) => (
           <Col key={prod._id} sm={12} md={6} lg={4} xl={3}>
              <Product product = {prod} />
           </Col>
            
          ))
         }
      </Row>
     </>
  )
}

export default HomeScreen;