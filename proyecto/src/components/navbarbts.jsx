import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetRIcons from './CartWidgetRIcons';
import { NavLink } from 'react-router-dom';

function NavBarBts() {
return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Navbar.Brand as={NavLink} to='/'>
            <img alt='logo' src='../Latam-logo_-v_(Indigo).svg.png' className="logo"
/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/categories/Paquetes'>Paquetes</Nav.Link>
            <NavDropdown title="Otros" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to='/categories/Circuitos'>Circuitos</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to='/categories/Asistencia'>
                Asistencia
        </NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <CartWidgetRIcons/>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
}

export default NavBarBts;