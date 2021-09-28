import { Jumbotron, Button } from "react-bootstrap"

const NavbarHome = () => {
    return (
        <Jumbotron className="m-4">
        <h1 className="mb-4" style={{fontWeight: "bold"}}>Your Spotify Statistics</h1>
        <p>
            Explore your listening history, view your recently played tracks. 
        </p>
        <p>
            See your most listened to artists, tracks and albums.</p>
        <p>
            <Button id="loginWithSpotify" className="badge-pill mt-3 px-4 py-2">LOGIN WITH SPOTIFY</Button>
        </p>
        </Jumbotron>
    )
}

export default NavbarHome