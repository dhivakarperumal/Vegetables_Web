import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footers'>
      <Container>
            <Row>
                <Col>
                <Row>
                <Col>
                <div>
                <h4 className='mt-4 mb-5' >Foody</h4>
                    <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat 
                        ipsum et lorem et sit, sed stet lorem sit clita</p>
                </div>
                </Col>

                <Col>
                <div>
                    <h4 className='mt-4 mb-5'>Address</h4>
                    <p>123 Street, New York, USA</p>
                    <p>+012 345 67890</p>
                    <p>info@example.com</p>
                </div>
                </Col>

                <Col>
                <div>
                    <h4 className='mt-4 mb-5'>Quick Links</h4>
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Support</p>
                </div>
                </Col>

                <Col>
                <div>
                    <h4 className='mt-4 mb-5'>New Letters</h4>
                    <div className='foot'>
                        <input type="text"  placeholder='Search..'/>
                        <button>Search.</button>
                    </div>
                    <div className='footer123'>
                        <i class="fa fa-facebook-official" aria-hidden="true"></i>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                </div>
                </Col>
                </Row>
                </Col>
            </Row>
      </Container>
    </div>
  )
}

export default Footer
