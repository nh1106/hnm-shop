import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'


const Product = () => {
const [ProductList, setProductList] = useState([])
const [query, setQuery] = useSearchParams();
const  getProducts= () =>{
  let searchQuery = query.get('q')||"";
  console.log(searchQuery)
    axios.get(`https://my-json-server.typicode.com/nh1106/hnm-shop/products?q=${searchQuery}`).then((response)=>{
      let data = response.data
      setProductList(data)
      })  
}

  useEffect(() =>{
    getProducts()
  },[query])
  return (
    <div>
      <Container>
        <Row>
        {
          ProductList.map((item) => (
            <Col lg={3}> 
               <ProductCard item={item}/>
            </Col>
          ))
        }
        </Row>
      </Container>

    </div>
  )
}

export default Product
