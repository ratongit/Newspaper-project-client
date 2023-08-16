import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";


const Catagory = () => {
    const {id} =useParams();
    const catagoryNews = useLoaderData()
    
  
    return (
        <div>
            { id && <h3>This Category News {catagoryNews.length}</h3>}
            {
                catagoryNews.map(news=> <NewsCard news={news} key={news._id}></NewsCard>)
            }
        </div>
    );
};

export default Catagory;