import React from 'react'


import {Card, Button, Container, Row} from 'react-bootstrap'



    const Cities = [
        {image:'https://www.docplanner.com/images/warsaw.png', title:"Warsaw", Button:"See openings"},
        {image:"https://www.docplanner.com/images/barcelona.png", title:"Barcelona", Button:"See openings"},
        {image:"https://www.docplanner.com/images/istanbul.png", title:"Istanboul", Button:"See openings"},
        {image:"https://www.docplanner.com/images/rome.png", title:"Rome", Button:"See openings"},
        {image:"https://www.docplanner.com/images/bologna.png", title:"Bologna", Button:"See openings"},
        {image:"https://www.docplanner.com/images/curitiba.png", title:"Curitiba", Button:"See openings"},
        {image:"https://www.docplanner.com/images/mexico-city.png", title:"Mexico City", Button:"See openings"}
        

    ]
    
    function CityInf (props){
    return (
       
            
       
        <Card className='box' style={{ width: '18rem' }} >
        <img className="explore-img my-3" src={props.image}/>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          
          <Button variant="primary">{props.Button} See openings</Button>
        </Card.Body>
      </Card> 
    
    
    )
}

    function cities () {
    
    return (

        
        <card>
        <div className="style grid">
        <Container>
        <Row className='d-flex justify-content-around mt-5'>
            {Cities.map(element=>
                <div>
                    <CityInf title = {element.title} image={element.image} button ={element.button}/>
                    </div>  
                     
                     )}
                     </Row>
                     </Container>
            </div>
            </card>
            
    )}
            
    
export default cities
