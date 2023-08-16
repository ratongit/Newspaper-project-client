import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavigationBar from '../../Share/NavigationBar/NavigationBar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const LogIn = () => {
    const [error, setError] = useState('')
    const {user ,signIn} =useContext(AuthContext)
    const navigate= useNavigate()
    const location = useLocation()
 
    const from = location.state?.from?.pathname  || '/catagori/0'

    const handleToSignIn = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value 
        const password = form.password.value 
        
        signIn(email,password) 
        .then(result=>{
            const logged = result.user 
            console.log(logged)
            form.reset()
            navigate( from)
        })
        .catch(error =>setError(error) )
    }
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className=' mx-auto bg-white' style={{padding:'60px',marginTop: '50px',width:'350px'}}>
            <h4 className='text-center fw-bolder'>Login your account</h4>
          
            <hr />
            <Form onSubmit={handleToSignIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='fw-bolder'>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter Your  Email Address" required/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='fw-bolder'>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>
      
      <Button style={{width:"100%", marginBottom:'10px'}} variant="primary" type="submit">
        LogIn
      </Button>
      <p className='text-danger'>{error.message}</p>
      <Form.Text className=" text-center text-muted">
      Dont’t Have An Account ? <Link to='/register'className='fw-bolder text-warning'>Register</Link>
        </Form.Text>
    </Form>
        </div>
        </div>
    );
};

export default LogIn;