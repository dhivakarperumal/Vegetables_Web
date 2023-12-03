import React from 'react'
import { Container,Col,Row } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <div>
      <Container>
        <Row className='mt-5'>
           <Col md={6} lg={12}>
             <Row>
             <Col >
            <div>
                <img src={require('../assert/about.jpg')}  alt='' className='About' />
            </div>
            </Col>

            <Col>
            <div className='about_container'>
                <h1>Best Organic Fruits And Vegetables</h1>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, 
                    sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i>Tempor erat elitr rebum at clita</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Aliqu diam amet diam et eos</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i>Clita duo justo magna dolore erat amet</p>

                    <button className='btn btn-success mt-4' style={{padding:"10px",width:"160px"}} >Read More</button>
            </div>
            </Col>
             </Row>
           </Col>

        </Row>
      </Container>
    </div>
  )
}

export default About
