import React from 'react'
 import Routers from '../router/Routers'
// import Footer from '../component/footer/footer'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const Layout = () => {
  return (
    <>
     <Header/>
     <Routers/>
     <Footer/> 
    </>
  )
}

export default Layout
