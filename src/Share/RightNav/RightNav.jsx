import React from 'react';
import { FaGoogle,FaGithub,FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Qzone from '../Qzone/Qzone';
const RightNav = () => {
    return (
        <div >
            <h4>Login With</h4>
          
            <Button variant="outline-info"><FaGoogle></FaGoogle>Login with Google</Button>
            <Button className='my-2' variant="outline-secondary"><FaGithub></FaGithub>Login with Github</Button>
            <div className='my-3'>
                <h4>Find Us On</h4>
            <ListGroup>
      <ListGroup.Item><FaFacebookF className='  text-success '></FaFacebookF>  Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter className='text-info'></FaTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram className='text-danger'></FaInstagram > Insttagram</ListGroup.Item>
     
    </ListGroup>
            </div>
            <Qzone></Qzone>

            <div className='bg-dark py-4 px-4 text-center text-white'>
                <h3>Create an Amazing Newspaper</h3>
                <p className='my-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="btn btn-danger">Learn More</button>
            </div>
        </div>
    );
};

export default RightNav;