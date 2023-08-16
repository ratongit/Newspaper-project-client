import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Newslights from '../Newslights/Newslights';
const News = () => {
    const news = useLoaderData()
    console.log(news)
    const {_id,title,details,image_url,category_id} = news
    return (
        <div>
              <Card  >
      <Card.Header>Featured</Card.Header>
      <img src={image_url} alt="" />
      <Card.Body>
        <Card.Title> {title}</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
       <Link to={`/catagori/${category_id}`}> <Button variant="primary"> <FaArrowLeft></FaArrowLeft>  All news in this category</Button></Link>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
    <Newslights></Newslights>
        </div>
    );
};

export default News;