import moment from 'moment';
import Rating from 'react-rating'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaRegBookmark,FaShareAlt,FaEye,FaStar, FaRegStar } from 'react-icons/fa';
const NewsCard = ({news}) => {
    const {_id,title,details,image_url,author,total_view,rating} = news
    return (
        <div >
           <Card className="mb-3">
      <Card.Header className="d-flex align-items-center">
        <img  className='rounded-circle' src={author?.img} style={{height:"54px"}} alt="" />
        <div className='ms-2 flex-grow-1'>
            <p className='mb-0'>{author?.name}</p>
            <p>{moment(author?.published_date).format('yyyy-MM-D')}</p>
        </div>
        <div className='fs-5'>
            <FaRegBookmark className='me-2'></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>

        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? <>{details}</> : <>{details.slice(0,250)}... <Link className='font-weight-bold' to={`/news/${_id}`}>Read More</Link></> }
        </Card.Text>
       
      </Card.Body>
      <Card.Footer className="text-muted">
        <div className='d-flex'>
           
           <div className="flex-grow-1">
           <Rating
  placeholderRating={rating.number} readonly
  emptySymbol={<FaRegStar></FaRegStar>}
  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
  fullSymbol={<FaStar></FaStar>}
/>
           <span>{rating.number}</span>
           </div>
        <div>
        <FaEye></FaEye> <span>{total_view}</span>
        </div>
        </div>
      </Card.Footer>
    </Card>
        </div>
    );
};

export default NewsCard;