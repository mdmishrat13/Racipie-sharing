import React from 'react'
import HeroSection from '../../components/universal/heroSection'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/universal/Footer'
import Navbar from '../../components/universal/Navbar'

const PublicLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default PublicLayout