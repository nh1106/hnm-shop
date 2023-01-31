import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container,Row , Col , Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const  getProductDetail= () =>{
    axios.get(`https://my-json-server.typicode.com/nh1106/hnm-shop/products/${id}`).then((response)=>{
      let data = response.data
      setProduct(data)
      })  
}
  
  useEffect(() => {
    getProductDetail()
  }, [])
  
  return (
    <div>
      <Container >
        <Row>
          <Col className='detail-img'> 
            <img src={product?.img}/>
           </Col>
          <Col>
            <span  className='detail-title' style={{textAlign:"left"}}>{product?.title}</span>
            <span className='detail-price' style={{textAlign:"left"}}>#{product?.price}</span>
            <div className='info' style={{justifyContent:"unset"}}>
              {product?.new == true ?  <span className='new'>NEW</span> : ""}
              {product?.choice == true?  <span className='best'>BEST</span> :  ""}
            </div>
            <Form.Select aria-label="Default select example">
              {
                  product&&product.size.map((item) => {
                    return <option>{item}</option>
                  })
              }
            </Form.Select>
            <Button variant="secondary" size="lg">
              추가하기
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail
