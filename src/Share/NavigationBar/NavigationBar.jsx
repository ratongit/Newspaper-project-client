import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
const NavigationBar = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleLogOut = event =>{
      logOut()
      .then()
      .catch(error => console.log(error))
    }
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
           
              <Link to='/catagori/0'>Home</Link>
          
            <Nav.Link id="RouterNavLink"  href="#pricing">About</Nav.Link>
            <Nav.Link id="RouterNavLink"  href="#pricing">Carrier</Nav.Link>
           
          </Nav>
          <Nav>
            {
              user && <FaUserCircle style={{fontSize:' 30px', marginRight: '10px'}}> {user.displayName}</FaUserCircle>
            }
           
             {
              user ?  <button onClick={handleLogOut} className='btn btn-secondary'>Log Out</button> : <Link to='/logIn'>
              <button className='btn btn-secondary'>Log In</button>
              </Link>
             }
            
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
        </div>
    );
};

export default NavigationBar;