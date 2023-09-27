import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Banner from './Components/Banner/Banner';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import Statistics from './Components/Statistics/Statistics';

  const router = createBrowserRouter([
     {
      path: '/',
      element: <Banner></Banner>,
      children:[
        {
          path:'/',
          element: <Home></Home>, 
        },
        {
          path:'/donation',
          element: <Donation></Donation>
        },
        {
          path: '/statistics',
          element:<Statistics></Statistics>
        }
      ]
     }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
