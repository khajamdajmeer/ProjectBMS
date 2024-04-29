import React from 'react'
import Navbar from '../Components/UserComponents/Navbar'
import { Outlet } from 'react-router'

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default HomePage