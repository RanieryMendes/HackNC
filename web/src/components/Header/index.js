import React from "react";
import { Navbar } from "react-bootstrap";
import Container from "@mui/material/Container";
import Nav from "react-bootstrap/Nav"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

export const Header = () =>{

    return (

        <div>
        <Navbar bg="warning"  expand="lg" className='navbar-expand-lg navbar-dark' >
       

          <Container>

       
                
                <Navbar.Brand className="secondary"> 
                
                <HealthAndSafetyIcon fontSize="large"> </HealthAndSafetyIcon>
                Thoughts for Life
                
                
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar justify-space-between"  >
                   
                    <Nav.Link  style={{fontSize:"22px"}} href="/">Home</Nav.Link>
                    <Nav.Link style={{fontSize:"22px"}} href="/registration"> Register</Nav.Link>
                    <Nav.Link  style={{fontSize:"22px"}} href="/">About</Nav.Link>
                    <Nav.Link   style={{fontSize:"22px"}} href="/">Login</Nav.Link>
                    
                
                </Nav>

                </Navbar.Collapse>
               
              

               
                </Container>

                <Form className="d-flex">
                                            <Form.Control
                                                type="search"
                                                placeholder="Search"
                                                className="me-2"
                                                aria-label="Search"
                                            />
                                            <Button variant="outline-success">Search</Button>
                 </Form>

        </Navbar>
        </div>
    )
}

