import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Features from './pages/Features.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<HomePage/>} />
        <Route path='about-us' element={<AboutUs/>} />
        <Route path='features' element={<Features/>} />
        <Route path='services' element={<Services/>} />
        <Route path='contact' element={<Contact/>} />
      </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
