import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Layout from './Layout/Layout';
import CardDetails from './CardDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        
          path:'/module/:id',           
          element: <CardDetails></CardDetails>,
          loader:()=> fetch('../donation.json')
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
