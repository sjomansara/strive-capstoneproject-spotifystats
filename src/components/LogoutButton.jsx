import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const LogoutButton = () => {
    return (
        <>
            <Link to="/"><Button className="badge-pill px-4 py-2" id="loginButton">LOGOUT</Button></Link>
        </>
    )
}

export default LogoutButton