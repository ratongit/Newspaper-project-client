import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';


import Marquee from "react-fast-marquee";

const Header = () => {
  
    return (
      <div className='container'>
        <div className='text-center'>
            <img src={logo} alt="" />
           <p>Journalism Without Fear or Favour</p>
           <p><small>{moment().format("dddd, MMMM DD, YYYY")}</small></p>
        </div >
        <div className='d-flex bg-secondary text-white py-2 px-3'>
        <button className='btn btn-danger'>Latest</button>
        <Marquee speed={60} pauseOnHover={true}>

{/* new code start */}


          
{/* new code end */}



  I can be a React component, multiple React components, or just some text.
</Marquee>
        </div>
       
      </div>
    );
};

export default Header;