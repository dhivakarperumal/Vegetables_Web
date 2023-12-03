import React from 'react';
import './Lates.css';
import { Container,Row,Col } from 'react-bootstrap';

const Laates = () => {
  return (
    <>
    <div>
      <Container>
        <Row className='mb-4'>
            <Col>
            <div className='text-center'>
                <h2>Latest Blog</h2>
                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. 
                    Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            </Col>
        </Row>
      </Container>

    <Container>
        <Row>
            <Col>
                <div className='latest_box text-center'>
                    <img src={require('../assert/blog-1.jpg')}  alt=''  />
                    <div className='titles' >
                        <h4>How to cultivate organic fruits and vegetables in own firm</h4>
                    </div>

                    <div className='latest_icons'>
                        <p><i class="fa fa-user" aria-hidden="true"></i> Admin <span><i class="fa fa-calendar" aria-hidden="true"></i>01 jan 2023</span></p>
                    </div>
                </div>
            </Col>

            <Col>
                <div className='latest_box text-center'>
                    
                    <img src={require('../assert/blog-2.jpg')}  alt=''  />
                    <div className='titles' >
                        <h4>How to cultivate organic fruits and vegetables in own firm</h4>
                    </div>
                    <div className='latest_icons'>
                        <p><i class="fa fa-user" aria-hidden="true"></i> Admin <span><i class="fa fa-calendar" aria-hidden="true"></i>01 jan 2023</span></p>
                    </div>
                </div>
            </Col>

            <Col>
                <div className='latest_box text-center'>
                    <img src={require('../assert/blog-3.jpg')}  alt=''  />

                    <div className='titles' >
                        <h4>How to cultivate organic fruits and vegetables in own firm</h4>
                    </div>

                    <div className='latest_icons'>
                        <p><i class="fa fa-user" aria-hidden="true"></i> Admin <span><i class="fa fa-calendar" aria-hidden="true"></i>01 jan 2023</span></p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>

    </div>
    
    </>
    
  )
}

export default Laates
