import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from '../Layout/Main';

import Catagory from '../Pages/Home/Catagory/Catagory';
import NewsLayout from '../NewsLayout/NewsLayout';
import News from '../NewsLayout/News/News';
import LoginLayOut from '../LoginLayout/LoginLayOut';
import LogIn from '../LoginLayout/LogIn/LogIn';
import Register from '../LoginLayout/Register/Register';
import NavigationBar from '../Share/NavigationBar/NavigationBar';
import Private from '../Private/Private';
import Terms from '../Terms/Terms';

    const router = createBrowserRouter([
      {
        path:'/',
        element:<LoginLayOut></LoginLayOut>,
        children: ([
          {
           path: '/',
           element: <Main></Main>
          },
          {
            path: '/logIn',
            element: <LogIn></LogIn>
          },
          {
            path:'/register',
            element:<Register></Register>
          },
          {
            path:'/terms',
            element: <Terms></Terms>
          }
        ])
      },
        {
          path: "catagori",
          element: <Main></Main>,
          children:([
            
            {
              path:':id',
              element:<Catagory></Catagory>,
              loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
              
            },
          
          ])
        },
        {
          path:'news',
          element:<NewsLayout></NewsLayout>,
          children:[{
            path:':id',
            element:<Private><News></News></Private>,
            loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
          }]
        }
      ]);

export default router;