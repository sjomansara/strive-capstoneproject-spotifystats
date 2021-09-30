import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const LoginButton = () => {
    return (
        <>
            <Link to="/userpage"><Button className="badge-pill px-4 py-2" id="loginButton">LOGIN</Button></Link>
        </>
    )
}

export default LoginButton