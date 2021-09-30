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
            header = "Tracks"
            break
        case "/albums":
            header = "Albums"
            break
        case "/artists":
            header = "Artists"
            break
        default: 
            header = ""
            break
    }

    if (location === "/recentlyplayed") {
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
                        <ButtonDropdown />
                    </Col>
                </Row>
            </Container>
    )
    }
}

export default PageCover