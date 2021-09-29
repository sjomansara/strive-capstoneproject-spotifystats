import React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc, faMicrophoneAlt, faMusic, faUser, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import NavbarItem from "./NavbarItem";

const SideBar = () => {
    const location = window.location.pathname
    console.log(location)

    return (
        <div id="sideBar">
            <Nav className="pl-4 d-none mt-4 d-md-block sidebar">
                <div className="sidebar-sticky"></div>
                <NavbarItem icon={faUser} isActive={location === "/userpage"} to="/userpage" text="Profile" />
                <NavbarItem icon={faVolumeUp} isActive={location === "/recentplayed"} to="/recentlyplayed" text="Recently Played" />
                <NavbarItem icon={faMusic} to="/tracks" text="Tracks" />
                <NavbarItem icon={faCompactDisc} to="/albums" text="Albums" />
                <NavbarItem icon={faMicrophoneAlt} to="/artists" text="Artists" />
            </Nav>
        </div>
        );
  };

  export default SideBar
