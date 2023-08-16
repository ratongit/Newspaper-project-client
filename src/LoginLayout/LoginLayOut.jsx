import React from 'react';

import { Outlet } from 'react-router-dom';

const LoginLayOut = () => {
    return (
        <div className='h-full w-full bg-body-secondary' style={{height:'100vh'}} >
          
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayOut;