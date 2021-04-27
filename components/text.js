import React from 'react'
import {Col, Row,Container} from 'react-bootstrap'
import im1 from '/home/mouna/Bureau/react2/react2/src/images/za.jpg'
import im2 from '../images/doc.svg'
import im3 from '/home/mouna/Bureau/react2/react2/src/images/ff.png'
import im4 from '/home/mouna/Bureau/react2/react2/src/images/takvi.png'
import im5 from '/home/mouna/Bureau/react2/react2/src/images/znami.jpg'
import im6 from '../images/tempo.svg'
import im7 from '../images/gipo.svg'
import im8 from '../images/cli.svg'

function Text() {
    return (
        <div>
          <div className="py-5">
    <Container>
        <Row>
          <Col md={4} xs={12}>
          <h1 className="paragra">We are a global company with local culture</h1>
          </Col>
          
          <Col md={8} xs={12}>
            <Row>
              <Col md={3} xs={6}>
                <img src={im1} className="tailleIcon"/>
              </Col> 
              <Col md={3} xs={6}>
                <img src={im2}  className="tailleIcon"/>
              </Col>           
              <Col md={3} xs={6}>
                <img src={im3} className="tailleIcon" />
              </Col>
              <Col md={3} xs={6}>
                <img src={im4} className="tailleIcon1"/>
              </Col> 
             
            </Row>

            <Row>
            <Col md={3} xs={6}>
                <img src={im5}className="tailleIcon"/>
              </Col>
              <Col md={3} xs={6}>
                <img src={im6} className="tailleIconTuo pt-4"/>
              </Col>
              <Col md={3} xs={6}>
                <img src={im7} className="tailleIconGip"/>
              </Col>
              <Col md={3} xs={6}>
                <img src={im8}  className="tailleIconGip"/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
   </div>  
        </div>
    )
}

export default Text

