import { Navbar, Nav, Button } from "react-bootstrap"

const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" id="navbar" className="px-5">
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

export default MyNavbar