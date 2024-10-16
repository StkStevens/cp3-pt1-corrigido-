const { NavbarCollapse, NavLink } = require("react-bootstrap");
import{Navbar, Nav, Container} from 'react-bootstrap'

function NavBar() {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Countainer>
                <Navbar.brand href="#">StkStore</Navbar.brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink href="#home">Home</NavLink>
                        <NavLink href="#produtos">Produtos</NavLink>
                        <NavLink href="#contato">Contato</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Countainer>
        </Navbar>
    )
}

export default NavBar;