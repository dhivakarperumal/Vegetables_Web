import React from 'react';
import './Futures.css';
import { Container, Col, Row } from 'react-bootstrap';

const Futures = () => {
    return (
        <>


            <Container>
                <Row>
                    <Col>
                        <div>
                            <h1 className='text-center mt-5 mb-4'>Our Features</h1>
                            <p className='text-center mb-5'>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit.
                                Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                        <Col>
                        <div className='box1 text-center'>
                            <img src={require('../assert/icon-1.png')}  alt='' />
                            <h4 className='mt-3'>Natural Process</h4>
                            <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. 
                            Ipsum diam justo sed vero dolor duo.</p>
                            <button className='btns'>Read More..</button>
                        </div>
                        

                    </Col>

                    <Col>
                        <div className='box1 text-center'>
                            <img src={require('../assert/icon-2.png')}  alt="" />
                        <h4 className='mt-3'>Organic Products</h4>
                        <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. 
                            Ipsum diam justo sed vero dolor duo.</p>
                            <button className='btns'>Read More..</button>
                        </div>
                        

                    </Col>

                    <Col>
                        <div className='box1 text-center'>
                        <img src={require('../assert/icon-3.png')}  alt="" />
                        <h4 className='mt-3'>Biologically Safe</h4>
                        <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. 
                            Ipsum diam justo sed vero dolor duo.</p>
                            <button className='btns'>Read More..</button>
                        </div>

                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Futures
