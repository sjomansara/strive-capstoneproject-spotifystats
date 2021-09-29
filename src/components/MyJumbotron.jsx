import { Jumbotron, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavbarHome = () => {
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
            <Button id="loginWithSpotify" className="badge-pill mt-4 px-4 py-2">LOGIN WITH SPOTIFY</Button>
        </p>
        </Link>
        </Jumbotron>
    )
}

export default NavbarHome