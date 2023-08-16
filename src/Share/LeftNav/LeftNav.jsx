import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catagories, setCatagories] = useState([])
   
   useEffect(()=>{
    fetch('http://localhost:5000/categories')
    .then(res=>res.json())
    .then(data => setCatagories(data))
    .catch(error => console.log(error))
   },[])

 
   
    return (
        <div>
           {
               catagories.map(catagori=> 
                <div  key={catagori.id}>
                <p  key={catagori.id}><Link   to={`/catagori/${catagori.id}`} className='text-decoration-none text-black '>{catagori.name}</Link></p>
                
             </div>)
           }
        </div>
    );
};

export default LeftNav;