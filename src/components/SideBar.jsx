import React from "react";
import { Nav } from "react-bootstrap";

const SideBar = () => {
   

    return (
        <>
            <Nav className="pl-4 col-md-2 d-none d-md-block sidebar">
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link id="navText">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText">Recently Played</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText">Tracks</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText">Albums</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText">Artists</Nav.Link>
            </Nav.Item>
            </Nav>
        </>
        );
  };

  export default SideBar
