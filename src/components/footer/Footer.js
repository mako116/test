import React from 'react'
import "../footer/footer.css"
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'
const quick__links=[
  {
      path:'/home',
      display:'Home'
  },
  {
      path:'/about',
      display:'About'
  },
  {
      path:'/tours',
      display:'Tours'
  }
]
const quick__links2=[
  {
      path:'/gallery',
      display:'Gallery'
  },
  {
      path:'login',
      display:'Login'
  },
  {
      path:'/register',
      display:'Register'
  }
]
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
       <Container>
        <Row>
          <Col lg="3">
          <div className="logo">
            <img src={logo} alt="" />
          <p>Your Privacy Choices</p>
          <div className="social__links d-flex align-items-center gap-4">
           <span>
            <Link to="#">Accessibility at Indeed</Link>
           </span>
            
          </div>
          </div>
          </Col>
          <Col lg="3">
            <h5 className='footer__link-title'>Discover</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links.map((item,index)=>(
                 <ListGroupItem key={index} className='ps-0 border-0'>
                 <Link to={item.path}>{item.display}</Link>
                 </ListGroupItem> 
                ))
              }
            </ListGroup>
          </Col>
          <Col lg="3">
          <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links2.map((item,index)=>(
                 <ListGroupItem key={index} className='ps-0 border-0'>
                 <Link to={item.path}>{item.display}</Link>
                 </ListGroupItem> 
                ))
              }
            </ListGroup>
          </Col>
          <Col lg="3">
          <h5 className='footer__link-title'>contact</h5>
            <ListGroup className='footer__quick-links'>
              
                 <ListGroupItem  className='ps-0 d-flex align-items-center
                 gap-3 border-0'>
                 <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i className='ri-map-pin-line'></i></span>
                  Address:
                 </h6>
                 <p className='mb-0'>Aba Abia state </p>
                  </ListGroupItem> 
              
                 <ListGroupItem  className='ps-0 d-flex align-items-center
                 gap-3 border-0'>
                 <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i className='ri-mail-line'></i></span>
                  Email:
                 </h6>
                 <p className='mb-0'> NwakwueEmmanuel1@gmail.com</p>
                  </ListGroupItem> 
              
                 <ListGroupItem  className='ps-0 d-flex align-items-center
                 gap-3 border-0'>
                 <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i className='ri- phone-fill'></i></span>
                  Phone:
                 </h6>
                 <p className='mb-0'>+2348100319613 </p>
                  </ListGroupItem> 
              
            </ListGroup>
          </Col>
          <Col lg="12" className='text-center pt-5'>
          <p className="copyright">Copyright {year}, design and develop by Nwaso chuks. All right reserve</p>
          </Col>
        </Row>
       </Container>
    </footer>
  )
}

export default Footer
