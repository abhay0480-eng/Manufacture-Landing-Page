import { useEffect, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/HeaderComponents/Header'
import Footer from './components/FooterComponents/Footer'

function App() {
  return (
    <>
   
     <Header/>
     <main className={`mt-20 px-5`}>
      <Outlet/>
     </main>
     <Footer/>
    </>
  )
}

export default App
