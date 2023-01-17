import './NavigationBar.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {AiFillHome} from 'react-icons/ai';

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
    <Container>
      <Navbar.Brand href="#home">Portfolio Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home"><AiFillHome title='Home' /></Nav.Link>
          <Nav.Link href="#pricing">Features</Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="Client name" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Edit Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavigationBar;