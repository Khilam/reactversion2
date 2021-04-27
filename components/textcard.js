import React from 'react'
import { Card } from 'react-bootstrap'
import {Col, Container, Row} from 'react-bootstrap'
import im10 from '/home/mouna/Bureau/react2/react2/src/images/im.png'
function Textcard() {
    return (
        <div>
             <div className="pt-5 section4">
        <Container>
          <Row>
            <Col md={6}>
                <h1 className="text-center pb-4">The world's biggest healthcare platform</h1>
                <small className="d-flex justify-content-center mx-5">We work from 7 offices all over the world, bringing Docplanner Group to life in a dozen countries.</small>
                 <div className="logoPng">
                    <img src={im10} className="logoPng "/>
                 </div>
            </Col>
            <Col md={6}>
            <Row>
          <Col md={6}>
            <Card className="cardSec4  mt-1 mr-1">
                <Card.Img variant="top-left " src="https://www.docplanner.com/img/flag.png" className="cardIcons mx-auto mt-1" />
                    <Card.Body className="text-center">
                        <Card.Title><h4>Leader in 12 countries</h4></Card.Title>
                        <Card.Text>
                            <small>Poland, Brazil, Mexico, Spain, Italy, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile</small>
                        </Card.Text>
                    </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="cardSec5 cardStat py-5">
                <Card.Img variant="top-left" src="https://www.docplanner.com/img/visits.png" className="cardIcons mx-auto mt-2" />
                    <Card.Body className="text-center">
                        <Card.Title><h4>4.8 million appointments</h4></Card.Title>
                        <Card.Text>
                           <small>booked last month</small>
                        </Card.Text>
                    </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="cardSec6 cardStat py-5 mt-4">
                <Card.Img variant="top-left" src="https://www.docplanner.com/img/patients.png" className="cardIcons mx-auto mt-2" />
                    <Card.Body className="text-center">
                        <Card.Title><h4>61.9 mln unique patients</h4></Card.Title>
                        <Card.Text>
                            <small>visit our websites each month</small>
                        </Card.Text>
                    </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="cardSec7  py-5 pl-2">
                <Card.Img variant="top-left" src="https://www.docplanner.com/img/doctors.png" className="cardIcons mx-auto mt-2" />
                    <Card.Body className="text-center">
                        <Card.Title><h4>92.5k active doctors</h4></Card.Title>
                        <Card.Text>
                           <small>trust our solutions</small>
                        </Card.Text>
                    </Card.Body>
            </Card>
          </Col>
       </Row>
            </Col>
          </Row>
        </Container>
      </div>
        </div>
    )
}

export default Textcard
