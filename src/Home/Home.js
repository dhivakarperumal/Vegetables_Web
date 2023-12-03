import React from 'react'
import Navbars from '../Navbars/Navbars';
import About from '../About/About';
import Futures from '../Features/Futures';
import Products from '../Products/Products'
import Footer from '../Footer/Footer';
import Laates from '../LatestPro/Laates';



const Home = () => {
  return (
    <>
      <Navbars/>

      
      <About/>
      <Futures/>
      <Products/>
      <Laates/>
      <Footer/>
    </>
  )
}

export default Home
