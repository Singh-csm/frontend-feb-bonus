import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Container, Row, Col,Form, Card, Button ,ButtonGroup} from 'react-bootstrap'

import{useNavigate , Link} from "react-router-dom"
import "../index.css"
import Popup from './popUp'

const HomePage = () => {
const [data,setData] = useState([])
const [studentId,setStudentId] = useState("")
const [name,setName] = useState("")
const [subject,setSubject] = useState("")
const [marks,setMarks] = useState("")
// const {studentId} = useParams()
const navigate = useNavigate()
const [showPopup, setShowPopup] = useState(false);

const togglePopup = () => {
  setShowPopup(!showPopup);
};



useEffect(()=>{


  var token = localStorage.getItem("token")
  axios.get("http://localhost:3001/getStudent",{headers:{'authorization':token}})
  .then((res)=>{setData(res.data.data)})

  console.log(data);

},[])




  const onDelete = (e)=>{
    var token = localStorage.getItem("token")

    // e.preventDefault()
    if(studentId){
    axios.delete(`http://localhost:3001/deleteStudent/${studentId}`,{headers:{'authorization':token}})
    .then(()=>{navigate("/")})
    .catch((res)=>{alert(res.data)})
  }
}


const onEdit = async(e)=>{
  e.preventDefault()

  console.log(studentId)
  // {setStudentId(post._id)}
  console.log(studentId);

  let token = localStorage.getItem("token")
  let data={
    name:name,
    subject:subject,
    marks:marks
  }
  if(studentId){
    

    axios.patch(`http://localhost:3001/updateStudent/${studentId}`,data,{headers:{'authorization':token}})
    .then(()=>{navigate("/")})
    .catch((res)=>{alert(res.data)})
}}





return (
  <div className='homepage'>
    <Container>
    <Row className="my-4">
      <Col>
        <h1>Student List:</h1>
      </Col>
    </Row>
    <Row className="my-4">
      {data.map(post => (
        <Col md={6} key={post._id}>
          
          <Card className='card'>
         
            <Card.Body>
              <Card.Title className="card-title">Name:{post.name}</Card.Title>
              <Card.Text style={{color:"blue"}}>
                Subject:{post.subject}
              </Card.Text>
              <Card.Text style={{color:"grey"}}>
                Marks: {post.marks}
              </Card.Text>
              <Card.Text className="card-text">
               {post.summary}
              </Card.Text>
          

             
              {/* <ButtonGroup aria-label="First group"  > */}
              {/* <Button variant="warning" href={`/${post._id}`} onClick ={onEdit}  >Edit</Button> 
               */}
                     <button id={post._id} onClick={()=>{{togglePopup()} ;{setStudentId(post._id)};}}>Edit data</button>
                        {showPopup && (
                          <Popup
                            content={ <Form >
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>name</Form.Label>
                                
                                <Form.Control type="text" value={name}  onChange={(event) => setName(event.target.value)} />

                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formBasicsubject">                      
                                <Form.Label>subjects</Form.Label>
                                <Form.Control type='subject' value={subject} onChange={(q)=>setSubject(q.target.value)}  />
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formBasicmarks">
                                <Form.Label>marks</Form.Label>
                                <Form.Control type="number" value={marks}  onChange={(event) => setMarks(event.target.value)} />
                              </Form.Group>
                              <Button variant="danger" type="submit" onClick={onEdit}>submit</Button>
                              </Form>
                            }
                            closePopup={togglePopup}
                          />
                        )}



              <Button variant="danger" className="ml-2 mx-4"  onClick={()=>{{onDelete()} ;{setStudentId(post._id)} }} >Delete  </Button>

             {/* </ButtonGroup> */}
           
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    {/* <Button variant='info' href='/createblog' >Create Your Own Blog</Button> */}
  </Container>
  </div>

);
}


export default HomePage
