import axios from 'axios'
import React, {useState}from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import{useNavigate,Link} from "react-router-dom"


const CreateUser = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [emailError,setEmailError] = useState("")
    const [passwordError,setPasswordError] = useState("")
    const [nameError,setNameError] = useState("")

    const navigate = useNavigate()
    const validate = () => {
        let emailError = '';
        let passwordError = '';
        let nameError = '';
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
      const nameRegex = /^[a-z ,.'-]+$/
    
      if (!emailRegex.test(email)) {
        emailError = 'Invalid email';
      }

      if(!nameRegex.test(name)){
        nameError = "sahi naam dalo"
      }
    
      if (!passwordRegex.test(password)) {
        passwordError = 'Password must be at least 6 characters and contain at least one uppercase letter, one lowercase letter, and one number';
      }
        setNameError(nameError)
        setEmailError(emailError);
        setPasswordError(passwordError);
    
        return !(emailError || passwordError || nameError);
      };
      const onSubmit = (e)=>{
        e.preventDefault()
        const check = validate()
        if(check){
        axios.post("http://localhost:3001/createUser",{email:email,password:password})
        .then((r)=>{navigate("/login")})
        .catch((s)=>{setEmailError(s.response.data.msg);})
        
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
          <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>name</Form.Label>
              <label style={{ color: 'red', marginLeft: '5px' }} >*</label>
              <Form.Control type="text" value={name} required={true} onChange={(event) => setName(event.target.value)} />
              <div style={{ color: 'red'}} className="error">{nameError}</div>
            </Form.Group>
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
            <Button variant="danger" type="submit">submit</Button>
            <br/><br/><br/>
            If you are not a registered user please      <Link to={"/login"} >login</Link>
            
          </Form>
        </Col>
      </Row>
    </Container>
  )
  
}

export default CreateUser
