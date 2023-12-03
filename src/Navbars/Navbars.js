import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from  '../assert/carousel-1.jpg';
import img2 from '../assert/carousel-2.jpg';


const Navbars = () => {
  return (
    <>
    <div>
       <Navbar expand="lg" className="navbars" id="navs123">
      <Container fluid >
        <Navbar.Brand className='logos' href="#home">FOODY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  className='links' >Home</Nav.Link>
            <Nav.Link className='links' >About</Nav.Link>
            <Nav.Link className='links' >Products</Nav.Link>
            <Nav.Link className='links' >Contact</Nav.Link>
          </Nav>
          <Nav className='header_icons'>
            <div><i class="fa fa-search" aria-hidden="true"></i></div>
            <div><i class="fa fa-user-circle-o" aria-hidden="true"></i></div>
            <div><i class="fa fa-cart-plus" aria-hidden="true"></i></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

    <Carousel>
      <Carousel.Item>
        <  img src={img2} className='images_carosal1' text="First slide" alt='' />
        <Carousel.Caption>
        <div className='text-center slider'>
            <h1 className='silder_header'>Natural Food Is Always Healthy</h1>
            <h1 className='silder_header'> Food Is Always Healthy</h1>
            
             
          </div>
          <div className='slider1'>
            <button className='btns'>Products</button>
            <button className='btns'>Services</button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        < img src={img1} className='images_carosal2' text="Second slide"  alt=''  />
        <Carousel.Caption>
        <div className='text-center slider'>
            <h1 className='silder_header'>Natural Food Is Always Healthy</h1>
            <h1 className='silder_header'> Food Is Always Healthy</h1>
            
             
          </div>
          <div className='slider1'>
            <button className='btns'>Products</button>
            <button className='btns'>Services</button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        < img src={img2} className='images_carosal3'  text="Third slide" alt='' />
        <Carousel.Caption>
          <div className='text-center slider'>
            <h1 className='silder_header'>Natural Food Is Always Healthy</h1>
            <h1 className='silder_header'> Food Is Always Healthy</h1>
            
             
          </div>
          <div className='slider1'>
            <button className='btns'>Products</button>
            <button className='btns'>Services</button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Navbars
