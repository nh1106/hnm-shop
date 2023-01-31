import React, { useState,useRef } from 'react'
import { Form,Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = ({setAuthenticate}) => {
  const inputRef = useRef();
  const inputpass = useRef();
  const navigate = useNavigate()
  let [id, setId] = useState("");
  let [password, setPassword] = useState();
  const idInput = (event) => {
    setId(event.target.value)
  }
  const passInput = (event) => {
    setPassword(event.target.value)
  }

  const loginUser = (event) => {
    event.preventDefault()
    if(!id) {
      setAuthenticate(false)
      inputRef.current.focus();
      return ; 
    }
    if(!password) {
      setAuthenticate(false)
      inputpass.current.focus();
      return ; 
    }
    else {
      setAuthenticate(true)
      navigate("/")
    }
  }
  
  return (
    <Container>
       <Form onSubmit={(event) => {loginUser(event)}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control 
           type="email" 
           placeholder="이메일"
           ref={inputRef}
           onChange ={(event) => {idInput(event)}}
          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="비밀번호" 
          ref={inputpass}
          onChange ={(event) => { passInput(event)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="로그인 상태 유지" />
        </Form.Group>
        <Button  variant="danger" type="submit">
          로그인
        </Button>
    </Form>
    </Container>
  )
}

export default Login
