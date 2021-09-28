import { Navbar, Nav, Button } from "react-bootstrap"

const NavbarHome = () => {
    return (
        <Navbar bg="light" expand="lg" id="navbar" className="px-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="currentColor" className="bi bi-bar-chart-fill mr-1" style={{color: "#E07A5F"}} viewBox="0 0 16 16">
        <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
        </svg>
        <Navbar.Brand href="#home" id="navbarBrand">STATS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Button className="badge-pill px-4 py-2" id="loginButton">LOGIN</Button>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarHome