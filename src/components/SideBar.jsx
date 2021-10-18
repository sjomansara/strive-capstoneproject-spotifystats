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
            <Nav className="pl-4 d-none mt-3 d-md-block sidebar">
                <div className="sidebar-sticky"></div>
                <NavbarItem icon={faUser} isActive={location.startsWith("/userpage")} startsWith="/userpage" to="/userpage" text="Profile" />
                <NavbarItem icon={faVolumeUp} isActive={location.startsWith("/recentlyplayed")} startsWith="/recentlyplayed" isActive={location.startsWith("/recentlyplayed")} to="/recentlyplayed" text="Recently Played" />
                <NavbarItem icon={faMusic} to="/tracks/long_term" startsWith="/tracks" text="Top Tracks" />
                {/* <NavbarItem icon={faCompactDisc} to="/albums" text="Albums" /> */}
                <NavbarItem icon={faMicrophoneAlt} startsWith="/artists" isActive={location.startsWith("/artists")} to="/artists/long_term" text="Top Artists" />
                <NavbarItem icon={faCompactDisc} to="/recommended/tracks" text="Recommended" />
            </Nav>
        </div>
        );
  };

  export default SideBar
