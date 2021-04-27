import React from 'react'

import {Nav, Navbar, NavDropdown } from 'react-bootstrap'




function Navnav() {
    return (
       
      <div className="pb-5">
        <Navbar expand="lg" fixed="top"> 
        <div className="container">
        <Navbar.Brand href="#home"><img src="/logoss.png" className="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link className="linkNav" href="#home" active >About us</Nav.Link>
                <Nav.Link className="linkNav" href="#link">Career</Nav.Link>
               
                <NavDropdown className="dropdown" title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Marketing &amp; PR</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Customer Success &amp; Sales</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">IT, Product, Data</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Finance &amp; Administration</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">HR &amp; more</NavDropdown.Item>
                </NavDropdown> 
            </Nav>          
        </Navbar.Collapse>
        </div>
        </Navbar>

    </div>
    )
}

export default Navnav
