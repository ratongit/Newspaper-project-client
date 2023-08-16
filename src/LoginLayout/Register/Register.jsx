import React, { useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavigationBar from '../../Share/NavigationBar/NavigationBar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
const Register = () => {
  const [error,setError] = useState('')
  const [accept, setAccept] = useState(false)
   const {createUser,user} = useContext(AuthContext)
   const handleToSubmit =event =>{
    event.preventDefault()
    const from = event.target 
   const name = from.name.value 
 
    const email = from.email.value 
    const password = from.password.value 
    console.log(name,email,password)
    createUser(email,password)
    .then(result => {
        const logged = result.user 
        console.log(logged)



    })
    .catch(error => setError(error))
   }
   const handleToAccept = event =>{
  setAccept(event.target.checked)
   }
    return (
        <div>
        <NavigationBar></NavigationBar>
        <div className=' mx-auto bg-white' style={{padding:'20px 40px',marginTop: '20px',width:'350px'}}>
        <h4 className='text-center fw-bolder'>Register your account</h4>
      
        <hr />
        <Form onSubmit={handleToSubmit}>
  <Form.Group  controlId="formBasicEmail">
    <Form.Label className='fw-bolder'>Your Name</Form.Label>
    <Form.Control name='name' type="text" placeholder="Your Name" required />
   
  </Form.Group>
  <Form.Group  controlId="formBasicEmail">
    <Form.Label className='fw-bolder'>Photo URL</Form.Label>
    <Form.Control  type="text" placeholder="Your Photo Link" />
   
  </Form.Group>
  <Form.Group  controlId="formBasicEmail">
    <Form.Label className='fw-bolder'>Email address</Form.Label>
    <Form.Control name='email' type="email" placeholder="Enter Your  Email Address" required />
   
  </Form.Group>

  <Form.Group   controlId="formBasicPassword">
    <Form.Label className='fw-bolder'>Password</Form.Label>
    <Form.Control name='password' type="password" placeholder="Password" required />
  </Form.Group>
  <Form.Group className='my-2'  controlId="formBasicCheckbox">
    <Form.Check onClick={handleToAccept} type="checkbox" label={<>Accept <Link to='/terms'>Turms & Condition</Link></>} />
  </Form.Group>
 <Button disabled={!accept}  style={{width:"100%", marginBottom:'10px'}} variant="primary" type="submit">
 Register
  </Button>
  <p className='text-danger'>{error.message}</p>
  <Form.Text className=" text-center text-muted">
  Allready Have An Account ? Please <Link to='/logIn'className='fw-bolder text-warning'>LogIn</Link>
    </Form.Text>
</Form>
    </div>
    </div>
    );
};

export default Register;