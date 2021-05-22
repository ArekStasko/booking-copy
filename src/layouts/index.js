import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GlobalStyle from '../assets/styles/globalstyles'

const MainLayout = ({ children }) => (
    <>
    <GlobalStyle/>
    <Navbar/>
    {children}
    <Footer/>
    </>
)

export default MainLayout