import React, {useEffect, useState} from "react";
import { Row, Col } from "react-bootstrap";
import axios from 'axios';

import Product from "../Components/Product";
import products from '../products';




const HomeScreen = () => {
   const [products, setProducts] = useState([]);
  
    useEffect(() => {
   
     ( async () => {
      const {data} = await axios.get('/api/products')
      setProducts(data)
    }  )()
  },[])



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