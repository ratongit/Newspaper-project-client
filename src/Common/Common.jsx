import React, { useEffect, useState } from 'react';

const Common = () => {
    const [news, setNews] = useState([])
    useEffect(()=>{
        fetch('news.json')
        .then(res=> res.json())
        .then(data=> setNews(data))
    },[])
    return (
        <div>
            {
                news.map((new,index) =><div key={index}>
                     {
                    new.filter(n=>n.category_id == id)
                } </div>)
               
            }
        </div>
    );
};

export default Comjmon;