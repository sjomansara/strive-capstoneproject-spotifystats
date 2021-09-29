import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NavbarItem = (props) => {
    const [isActive, setIsActive] = useState(props.isActive)
    const location = window.location.pathname
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

    useEffect(() => {
        const pathToMatch = props.to

        if (location === pathToMatch) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [location])

    return (
        <Link id="linkHover" to={props.to}>
            <Nav.Item className={isActive || location === props.to ? "mb-2 pl-3 nav-text-active" : "pl-3 mb-2"} onClick={onClickItem}>
                <div className={isActive || location === props.to ? "text-white" : ""} id="navText"><FontAwesomeIcon icon={props.icon} /> &nbsp;{props.text}</div>
            </Nav.Item>
        </Link>
    );
  };

  export default NavbarItem
