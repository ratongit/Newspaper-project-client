import React from 'react';
import img1 from '../../assets/qZone1.png'
import img2 from '../../assets/qZone2.png'
import img3 from '../../assets/qZone3.png'
const Qzone = () => {
    return (
        <div className='bg-light my-3 py-4 text-center'>
            <h4>Q-zone</h4>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
        </div>
    );
};

export default Qzone;