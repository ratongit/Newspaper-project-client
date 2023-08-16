import React from 'react';

import Footer from '../Share/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Outlet } from 'react-router-dom';
import Header from '../Share/Header/Header';
import RightNav from '../Share/RightNav/RightNav';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
         
            <Container className='mt-4'>
      <Row>
        
        <Col lg={9}>
          <Outlet></Outlet>
        </Col>
        <Col lg={3}><RightNav></RightNav></Col>
      </Row>
    </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;