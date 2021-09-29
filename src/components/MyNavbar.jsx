import { useEffect } from "react"
import { Navbar, Nav } from "react-bootstrap"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"

const MyNavbar = () => {
    const location = window.location.pathname
    let button = location === "/" ? <LoginButton /> : <LogoutButton />

    useEffect(() => {
        button = location === "/" ? <LoginButton /> : <LogoutButton />
    }, [location])

    return (
        <Navbar bg="light" expand="lg" id="navbar" className="px-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="currentColor" className="bi bi-bar-chart-fill mr-1" style={{color: "#E07A5F"}} viewBox="0 0 16 16">
        <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
        </svg>
        <Navbar.Brand href="#home" id="navbarBrand">STATS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            {button}
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar