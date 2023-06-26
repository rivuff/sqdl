import './App.css';
import { Outlet } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/homepage/NavBar.jsx'
import Footer from './components/homepage/Footer.js'
import SQDLCarousel from './components/homepage/Carousel.js'
import Login from './components/lr/Login.js'
import reportWebVitals from './reportWebVitals';
import Register from './components/lr/Register';
import LandingPage from './components/dashboards/LandingPage.js'
import ContextProvider from './context/contextProvider';

import Accept from './components/invite/Accept.js'
//import { useParams } from 'react-router';



const AppLayout = ()=>{
  return (
    <div>
      <ContextProvider>
        <NavBar navList = {{about: 'About', login: 'Login', register: 'Register'}}/> 
        <Outlet/>
        <Footer/>
      </ContextProvider>
    </div>
  )
}

const router = createBrowserRouter([
  {
      path: "/",
      element:<AppLayout/>,
      children:[
        {
          path: "/",
          element:<SQDLCarousel/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path:'/dashboard',
          element: <LandingPage/>
        },
        {
          path: '/teacher/accept/:token',
          element: <Accept />
        },
        {
          path:'/about',
          element: <About/>
        }
      ]
  }
])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>)



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { ThemeProvider } from "@material-tailwind/react";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();