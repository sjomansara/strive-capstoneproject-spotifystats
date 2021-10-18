import { DropdownButton } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

const ButtonDropdown = (props) => {
    const value = useParams()
    let title;
    let toArray = []

    console.log("value is: ", value)
    console.log(props.type)

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

    if (props.type === "artist") {
        toArray = ["/artists/short_term", "/artists/medium_term", "/artists/long_term"]
    } else if (props.type === "tracks") {
        toArray = ["/tracks/short_term", "/tracks/medium_term", "/tracks/long_term"]
    } else if (props.type === "recommended") {
        toArray = ["/recommended/tracks", "/recommended/artists"]
    }

    if (value.type === "tracks") {
        title = "Tracks"
    } else if (value.type === "artists") (
        title = "Artists"
    )

    return (
        <div>
            <DropdownButton
            className="ml-1"
            title={title}
            id="dropdown-menu-align-right"
            >
            <Link className="ml-3 dropdownLink" value="Last 30 days" to={toArray[0]}>{props.type === "recommended" ? "Tracks" : "Last 30 days"}</Link>
            <br></br>
            <Link className="ml-3 dropdownLink" value="Last 6 months" to={toArray[1]}>{props.type === "recommended" ? "Artists" : "Last 6 months"}</Link>
            <br></br>
            {props.type === "artist" || props.type === "tracks" && <Link className="ml-3 dropdownLink" value="All Time" to={toArray[2]}>All time</Link>}
            </DropdownButton>
        </div>
    )
}

export default ButtonDropdown