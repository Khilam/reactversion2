import logo from './logo.svg';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Cards from '/home/mouna/Bureau/react2/react2/src/components/cards1.js'
import Navnav from '/home/mouna/Bureau/react2/react2/src/components/navbar.js'
import Text from '/home/mouna/Bureau/react2/react2/src/components/text.js'
import Cities from '/home/mouna/Bureau/react2/react2/src/components/cities.js'
import Footer from '/home/mouna/Bureau/react2/react2/src/components/footer.js'
//import Cities from '/home/mouna/Bureau/react2/react2/src/components/cities.js'
import Textcard from '/home/mouna/Bureau/react2/react2/src/components/textcard.js'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Appli() {
  return (
    <div className="App">
      <Navnav/>

<div className="container pt-5"> 
 <div className="section1 py-4">
      <div className="col-md-12 d-flex justify-content-center ">
         <img src="/logossss.png" className="icon-center"/>
      </div>
      <div className="col-md-12 pt-4">
        <h1 className="text-center">Making the healthcare experience more human</h1>
      </div>
  <div className="pt-5">
  <div className="row">
        <div className="col-md-6 parag">
          <p>
          We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.
          </p>
        </div>
        <div className="col-md-6">
          <p>
          We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.
          </p>
        </div>
      </div>
  </div>
 </div>
 </div>  
 
  <Cards/>
  <Text/>
  <Textcard/>
    
    {/*******post-card*******/}
    <div className=" container py-5">
    <Container>
       <Row>
          <Col md={{ span: 6, offset: 3 }}>
             <h1 className="text-center">Improve the lives of millions. Change yours forever</h1>
             <small className="parg">More than 1400 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Bologna, Mexico City and Curitiba, our search for great talent never stops.</small>
          </Col>
       </Row>
    </Container>
 </div>
 {/****************cities *************/}

<Cities/>
 {/**************pre-footer ********/}

 <div className="py-5">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center">Sounds interesting? Join us now!</h2>
              <Col md={{ span: 4, offset: 4 }}>
                <Button className="buton text-uppercase mt-2"  variant="primary"> see all current aopenings</Button>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
<Footer/>
 </div>

  );
}

export default Appli;
