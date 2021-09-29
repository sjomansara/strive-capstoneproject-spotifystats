import React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc, faMicrophoneAlt, faMusic, faUser, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";

const SideBar = () => {
    const location = window.location.pathname

    return (
        <div id="sideBar">
            <Nav className="pl-4 d-none d-md-block sidebar">
                <div className="sidebar-sticky"></div>
                <NavbarItem icon={faUser} to="/userpage" text="Username" />
                <Nav.Item className="mb-2">
                    <Link id="linkHover" to="/userpage"><Nav.Link id="navText"><FontAwesomeIcon icon={faVolumeUp} /> &nbsp;Recently Played</Nav.Link></Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                    <Link id="linkHover" to="/userpage"><Nav.Link id="navText"><FontAwesomeIcon icon={faMusic} /> &nbsp;Tracks</Nav.Link></Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                    <Link id="linkHover" to="/userpage"><Nav.Link id="navText"><FontAwesomeIcon icon={faCompactDisc} /> &nbsp;Albums</Nav.Link></Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                    <Link id="linkHover" to="/userpage"><Nav.Link id="navText"><FontAwesomeIcon icon={faMicrophoneAlt} /> &nbsp;Artists</Nav.Link></Link>
                </Nav.Item>
            </Nav>
        </div>
        );
  };

  export default SideBar
