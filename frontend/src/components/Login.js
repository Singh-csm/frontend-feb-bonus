import axios from 'axios'
import React, {useState}from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import{useNavigate , Link} from "react-router-dom"

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [emailError,setEmailError] = useState("")
    const [passwordError,setPasswordError] = useState("")
    const navigate = useNavigate()
    const validate = () => {
        let emailError = '';
        let passwordError = '';
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    
      if (!emailRegex.test(email)) {
        emailError = 'Invalid email';
      }
    
      if (!passwordRegex.test(password)) {
        passwordError = 'Password must be at least 6 characters and contain at least one uppercase letter, one lowercase letter, and one number';
      }
    
        setEmailError(emailError);
        setPasswordError(passwordError);
    
        return !(emailError || passwordError);
      };
      const onSubmit = (e)=>{
        e.preventDefault()
        const check = validate()
        if(check){
        axios.post("http://localhost:3001/login",{email:email,password:password})
        .then((r)=>{console.log(r.data.data);localStorage.setItem("token",r.data.data)   ; navigate("/") })
        .catch((s)=>{console.log(s.response);})
        
      }}
      

  
      


  return (
    <Container >
      <Row className="my-4">
        <Col>
          <h1>Sign In</h1>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
     
              <Form.Label>Email Address</Form.Label>
              <label style={{ color: 'red', marginLeft: '5px' }} >*</label>
              <Form.Control type='email' value={email} required={true} onChange={(q)=>setEmail(q.target.value)}  />
              <div style={{ color: 'red'}} className="error">{emailError}</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <label style={{ color: 'red', marginLeft: '5px' }} >*</label>
              <Form.Control type="password" value={password} required={true} onChange={(event) => setPassword(event.target.value)} />
              <div style={{ color: 'red'}} className="error">{passwordError}</div>
            </Form.Group>
            <Button variant="success" type="submit">Sign In</Button>
            <br/><br/><br/>
            If you are not a registered user please      <Link to={"/User"} >SIGNUP</Link>
          </Form>
        </Col>
      </Row>
    </Container>
  )
  
}

export default Login
