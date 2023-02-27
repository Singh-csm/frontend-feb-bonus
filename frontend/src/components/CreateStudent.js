import axios from 'axios'
import React, {useState,useEffect}from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import{useNavigate} from "react-router-dom"



const CreateStudent = () => {
    const [name,setName] = useState("")
    const [subject,setSubject] = useState("")
    const [marks,setMarks] = useState("")
   

    const navigate = useNavigate()
    useEffect(()=>{
      var token = localStorage.getItem("token")
      console.log(token);
      if(!token){
        alert("Pls login First ")
         navigate("/login")
        }
    },[])
      



      const onSubmit = (e)=>{
        e.preventDefault()
        var token = localStorage.getItem("token")
        // const check = validate()
        // if(check){{headers:{'authorization':token}}
        axios.post("http://localhost:3001/createStudent",{subject:subject,marks:marks,name:name},{headers:{'authorization':token}})
        .then((r)=>{navigate("/")})
        .catch((s)=>{alert(s.message)})
        
      }
      

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
              {/* <div style={{ color: 'red'}} className="error">{nameError}</div> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicsubject">
     
              <Form.Label>subjects</Form.Label>
              <label style={{ color: 'red', marginLeft: '5px' }} >*</label>
              <Form.Control type='subject' value={subject} required={true} onChange={(q)=>setSubject(q.target.value)}  />
              {/* <div style={{ color: 'red'}} className="error">{subjectError}</div> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicmarks">
              <Form.Label>marks</Form.Label>
              <label style={{ color: 'red', marginLeft: '5px' }} >*</label>
              <Form.Control type="number" value={marks} required={true} onChange={(event) => setMarks(event.target.value)} />
              {/* <div style={{ color: 'red'}} className="error">{marksError}</div> */}
            </Form.Group>
            <Button variant="danger" type="submit">submit</Button>
            
            
          </Form>
        </Col>
      </Row>
    </Container>
  )
  
}

export default CreateStudent
