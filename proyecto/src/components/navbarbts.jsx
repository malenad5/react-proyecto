import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetRIcons from './CartWidgetRIcons';

function NavBarBts() {
return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Navbar.Brand href="#home">
            <img alt='logo' src='../Latam-logo_-v_(Indigo).svg.png' className="logo"
/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Paquetes</Nav.Link>
            <NavDropdown title="Otros" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Circuitos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
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