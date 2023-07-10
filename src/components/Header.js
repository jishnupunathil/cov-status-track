import React,{ Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Link } from 'react-router-dom';


class  Header extends Component {

    render(){

        return (
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Covid-19</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <BrowserRouter>
        <Link className='nav-link' to="/india">India</Link>
        <Link className='nav-link' to="/world">World</Link>
        </BrowserRouter>
            </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      );
    }
}

export default Header;