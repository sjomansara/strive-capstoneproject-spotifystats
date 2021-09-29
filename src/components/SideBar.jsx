import React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc, faMicrophoneAlt, faMusic, faUser, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import NavbarItem from "./NavbarItem";

const SideBar = () => {
    const location = window.location.pathname

    return (
        <div id="sideBar">
            <Nav className="pl-4 d-none mt-5 d-md-block sidebar">
                <div className="sidebar-sticky"></div>
                <NavbarItem icon={faUser} to="/userpage" text="Username" />
                <NavbarItem icon={faVolumeUp} to="/userpage" text="Recently Played" />
                <NavbarItem icon={faMusic} to="/userpage" text="Tracks" />
                <NavbarItem icon={faCompactDisc} to="/userpage" text="Albums" />
                <NavbarItem icon={faMicrophoneAlt} to="/userpage" text="Artists" />
            </Nav>
        </div>
        );
  };

  export default SideBar
