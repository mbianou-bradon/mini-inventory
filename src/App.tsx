import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/molecules/sidebar/Sidebar.organism';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home.page';
import Inventory from './pages/inventory/Inventory.page';
import Magasin from './pages/magasin/Magasin.page';
import Product from './pages/product/product.page';


const MyApp = () => {


  return (
    <div className="font-mono [&_*]:transition-transform [&_*]:ease-linear [&_*]:duration-200">

      <div className="h-full lg:h-scree">
        <Outlet />
      </div>
    </div>
  )
}

const router = createBrowserRouter(
  [
    {
      element: <MyApp />,
      // errorElement: <Error />,
      children: [
        { path: '/', element: <Home />, },
        { path: '/inventory', element: <Inventory /> },
        { path: '/magasin', element: <Magasin /> },
        { path: '/produit', element: <Product /> },
      ]
    }
  ]
)

function App() {
  return (
    <div className="App text-slate-800">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
