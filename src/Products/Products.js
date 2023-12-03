import React from 'react';
import './Products.css';
import { Container,Row,Col } from 'react-bootstrap';

const Products = () => {
  return (
    <div>
      <Container>
        <Row>
         <div className='products_sections'>
           <div>
                <h2 className='mt-5 mb-2'>Our Products</h2>
                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
           </div>
           <div>
             <button className='btns123'>Vegetable</button>
             <button className='btns12'>Fruits</button>
             <button className='btns12'>Fresh</button>
           </div>
         </div>
          <Col>
         
            <div>
            <Row className='mt-4 mb-4'>
              <Col>
                  <div className='boxs text-center'>
                      <img src={require('../assert/product-1.jpg')} alt='' />

                      <div>
                        <h3>Fresh Tomato</h3>
                      </div>

                      <div>
                        <p className='rate'>$.300<span className='throws'>$.200</span></p>
                      </div>
                      <hr></hr>
                      <div>
                        <button className='btnns'><span className='span_icons'><i class="fa fa-eye" aria-hidden="true"></i></span>View Details</button>
                        <button className='btnns'><span className='span_icons'><i class="fa fa-shopping-bag" aria-hidden="true"></i></span>Add To Cart</button>
                      </div>
                  </div>
                  
              </Col>

              <Col>
                  <div className='boxs text-center'>
                    <img src={require('../assert/product-2.jpg')} alt='' />
                    <div>
                        <h3>Fresh Tomato</h3>
                      </div>
                      <div>
                        <p className='rate'>$.300<span className='throws'>$.200</span></p>
                      </div>

                      <hr></hr>
                      <div>
                        <button className='btnns'><span className='span_icons'><i class="fa fa-eye" aria-hidden="true"></i></span>View Details</button>
                        <button className='btnns'><span className='span_icons'><i class="fa fa-shopping-bag" aria-hidden="true"></i></span>Add To Cart</button>
                      </div>
                  </div>
              </Col>

              <Col>
                  <div className='boxs text-center'>
                    <img src={require('../assert/product-3.jpg')} alt='' />
                    <div>
                        <h3>Fresh Tomato</h3>
                      </div>
                      <div>
                        <p className='rate'>$.300<span className='throws'>$.200</span></p>
                      </div>

                      <hr></hr>
                      <div>
                        <button className='btnns'><span className='span_icons'><i class="fa fa-eye" aria-hidden="true"></i></span>View Details</button>
                        <button className='btnns'><span className='span_icons'><i class="fa fa-shopping-bag" aria-hidden="true"></i></span>Add To Cart</button>
                      </div>
                  </div>
              </Col>
              <Col>
                  <div className='boxs text-center'>
                    <img src={require('../assert/product-4.jpg')} alt='' />
                    <div>
                        <h3>Fresh Tomato</h3>
                      </div>
                      <div>
                        <p className='rate'>$.300<span className='throws'>$.200</span></p>
                      </div>

                      <hr></hr>
                      <div>
                        <button className='btnns'><span className='span_icons'><i class="fa fa-eye" aria-hidden="true"></i></span>View Details</button>
                        <button className='btnns'><span className='span_icons'><i class="fa fa-shopping-bag" aria-hidden="true"></i></span>Add To Cart</button>
                      </div>
                  </div>
              </Col>
              </Row>
            </div>
            
          </Col>
        </Row>
      </Container>

 <div className='back_ground'>
   <Container>
     <Row>
      <div className='cols12'>
        <div>
          <h1 className='text-white'>Visit Our Firm</h1>
          <p className='text-white para'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
        </div>
        <div>
         <button className='btn123456'>Visit</button>
        </div>
        </div>
     </Row>
   </Container>
 </div>

    </div>
  )
}

export default Products
