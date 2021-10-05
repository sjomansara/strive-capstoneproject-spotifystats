import { useState } from "react";
import { Jumbotron, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import SpotifyLogin from 'react-spotify-login'
import Cookies from 'universal-cookie'

const NavbarHome = () => {
    const onSuccess = (obj) => {
        const cookies = new Cookies()
        cookies.set("token", obj.access_token, { path: "/" })
        console.log("cookies is: ", cookies.get('token'))
    }

    return (
        <Jumbotron className="m-4">
        <h1 className="mb-3" style={{fontWeight: "bold"}}>Your Spotify Statistics</h1>
        <span>
            Explore your listening history, view your recently played tracks. 
        <br></br>
            See your most listened to artists, tracks and albums.
        </span>
        <Link to="/userpage">
        <p>
        <SpotifyLogin 
            className="badge-pill mt-4 px-4 py-2 loginWithSpotify"
            clientId={"72bff28ce0d6408cb89d258eb550bc35"}
            redirectUri={"http://localhost:3000/callback"}
            onSuccess={onSuccess}
            scope="user-top-read user-read-recently-played"
            // onFailure={onFailure} 
            />
        </p>
        </Link>
        </Jumbotron>
    )
}

export default NavbarHome