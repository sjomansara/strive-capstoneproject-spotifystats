import { DropdownButton } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

const ButtonDropdown = (props) => {
    const value = useParams()
    let title; 

    console.log(value)

    switch (value.time) {
        case ("short_term"):
            title = "Last 30 days"
            break
        case ("medium_term"):
            title = "Last 6 months"
            break
        case ("long_term"):
            title = "All time"
            break
    }

    return (
        <div>
            <DropdownButton
            className="ml-1"
            title={title}
            id="dropdown-menu-align-right"
            >
            <Link className="ml-3" value="Last 30 days" to={props.type === "artist" ? "/artists/short_term" : "/tracks/short_term"}>Last 30 days</Link>
            <br></br>
            <Link className="ml-3" value="Last 6 months" to={props.type === "artist" ? "/artists/medium_term" : "/tracks/medium_term"}>Last 6 months</Link>
            <br></br>
            <Link className="ml-3" value="All Time" to={props.type === "artist" ? "/artists/long_term" : "/tracks/long_term"}>All time</Link>
            </DropdownButton>
        </div>
    )
}

export default ButtonDropdown