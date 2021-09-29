import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc, faMicrophoneAlt, faMusic, faUser, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NavbarItem = (props) => {
    const [isActive, setIsActive] = useState(false)
    let classText = "mb-2 mt-5"

    const onClickItem = (event) => {
        console.log(event.target)
        setIsActive(!isActive)
        // if (isActive) {
        //     event.target.className += " nav-text-active"
        // } else {
        //     event.target.className = "mb-2 mt-5"
        // }
    }

    // useEffect(() => {

    // })

    return (
        <Nav.Item className={isActive ? "mb-2 nav-text-active" : "mb-2"} onClick={onClickItem}>
            <Link id="linkHover" to={props.to}><Nav.Link className={isActive ? "text-white" : ""} id="navText"><FontAwesomeIcon icon={props.icon} /> &nbsp;{props.text}</Nav.Link></Link>
        </Nav.Item>
    );
  };

  export default NavbarItem
