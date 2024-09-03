import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/molecules/sidebar/Sidebar.organism';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home.page';


const MyApp = () => {


  return (
    <div className="font-mono [&_*]:transition-transform [&_*]:ease-linear [&_*]:duration-200">

      <div className="h-full lg:h-scree sm:ml-[13rem]">
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
        // { path: '/students', element: <Users />},
        // { path: '/login', element: <Login />},
      ]
    }
  ]
)

function App() {
  return (
    <div className="App text-slate-800 max-w-[85rem] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
