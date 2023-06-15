import React from 'react'
import productss from '../../assets/data/workers'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

const ProductDetails = () => {
    const {id} = useParams()

    const product = productss.find(item => item.id === id )

    const {
        title,
       para ,
       fulltime,
       salary,
       posted, 
       codes2,
       codes,
       p,
       codes3
      } = product
  return (
    <>
     <section className="">
     <Container>
     <Row>
     <Col lg="6">
     <div className="flexi">
              <div className="dif">
                  <h2 className="textblack">{title}</h2>
                  <div className='der'>
                  <span>{fulltime}</span>
                  <span>{posted}</span>
                  <span>{para}</span>
                  </div>
              <div className="skills">
              skills  :
              </div>
               <div className='desam'>
             
               <span>{codes}</span>
               <span>{codes2}</span>
               <span>{codes3}</span>
                   
                </div>
                <hr/>
                <div className='price'> 
                    price :
                </div>
                <span>
                    <p className='salary'>{salary}</p>
                </span>
                <div className="madd">
                Job details :
                </div>
                    <div className="text-sm mb-5 mt-3">
                        <p>{p}</p>
                    </div>
                   <div className="buts">
                    <button>Apply now</button>
                   </div>
                   
                </div>
                </div>
                </Col>  
                 </Row>
     </Container>
     </section> 
    </>
  )
}

export default ProductDetails
