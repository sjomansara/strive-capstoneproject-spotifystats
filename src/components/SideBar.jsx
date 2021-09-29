import React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc, faMicrophoneAlt, faMusic, faUser, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
   

    return (
        <div id="sideBar">
            <Nav className="pl-4 d-none d-md-block sidebar">
                <div className="sidebar-sticky"></div>
            <Nav.Item className="mb-2 mt-5">
                <Nav.Link id="navText"><FontAwesomeIcon icon={faUser} /> &nbsp;Username</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
                <Nav.Link id="navText"><FontAwesomeIcon icon={faVolumeUp} /> &nbsp;Recently Played</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
                <Nav.Link id="navText"><FontAwesomeIcon icon={faMusic} /> &nbsp;Tracks</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
                <Nav.Link id="navText"><FontAwesomeIcon icon={faCompactDisc} /> &nbsp;Albums</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
                <Nav.Link id="navText"><FontAwesomeIcon icon={faMicrophoneAlt} /> &nbsp;Artists</Nav.Link>
            </Nav.Item>
            </Nav>
        </div>
        );
  };

  export default SideBar
