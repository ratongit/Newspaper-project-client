import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import img1 from '../../assets/editorsInsight1.png'
import img2 from '../../assets/editorsInsight2.png'
import img3 from '../../assets/editorsInsight3.png'
const Newslights = () => {
    return (
        <div className='mt-4'>
            <h3>Editors Insight</h3>
            <Row xs={1} md={2} lg={3} className="g-4">
            <Card>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
            <Card >
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
            <Card>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
    </Row>
        </div>
    );
};

export default Newslights;