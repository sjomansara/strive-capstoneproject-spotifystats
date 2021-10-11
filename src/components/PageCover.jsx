import { Container, Row, Col } from "react-bootstrap"
import ButtonDropdown from "./ButtonDropdown"

const PageCover = () => {
    const location = window.location.pathname
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
    } else if (location.startsWith("/tracks")) {
        header = "Top Tracks"
    } else if (location.startsWith("/details")) {
        header = "Details"
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
                        {header !== "Details" && <ButtonDropdown type={location.startsWith("/artists") ? "artist" : "tracks"} />}
                    </Col>
                </Row>
            </Container>
    )
    }
}

export default PageCover