import { Container, Row, Col } from "react-bootstrap"
import ButtonDropdown from "./ButtonDropdown"

const PageCover = () => {
    const location = window.location.pathname
    let type
    let header = ""

    switch(location) {
        case "/recentlyplayed":
            header = "Recently Played"
            break
        case "/tracks":
            header = "Top Tracks"
            break
        case "/albums":
            header = "Top Albums"
            break
        case "/details":
            header = "Details"
            break
        default: 
            header = ""
            break
    }
    if (location.startsWith("/artists")) {
        header = "Top Artists"
        type = "artists"
    } else if (location.startsWith("/tracks")) {
        header = "Top Tracks"
        type = "tracks"
    } else if (location.startsWith("/details/track")) {
        console.log("location is: ", location)
        header = "Track Details"
    } else if (location.startsWith("/details/album")) {
        console.log("location is: ", location)
        header = "Album Details"
    } else if (location.startsWith("/details/artist")) {
        console.log("location is: ", location)
        header = "Artist Details"
        type = "artist"
    } else if (location.startsWith("/recommended")) {
        console.log("location is: ", location)
        header = "Recommended Tracks"
        type = "recommended"
    }

    if (location === "/recentlyplayed" || location === "/details") {
        return (
            <Container className="my-3 ml-3" id="pageCover">
                <Row>
                    <Col md={12}>
                        <h2 className="pl-2" id="pageCoverText">{header}</h2>
                    </Col>
                </Row>
            </Container>
        )} else {
        return (
            <Container className="my-3 ml-3" id="pageCover">
                <Row>
                    <Col md={10}>
                        <h2 className="pl-2" id="pageCoverText">{header}</h2>
                    </Col>
                    <Col md={2}>
                        {!location.startsWith("/details") && !location.startsWith("/recommended") && <ButtonDropdown type={type} />}
                    </Col>
                </Row>
            </Container>
    )
    }
}

export default PageCover