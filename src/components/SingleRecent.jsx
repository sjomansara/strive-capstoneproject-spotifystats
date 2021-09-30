import { Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const SingleRecent = () => {
    return (
        <Container className="my-3 ml-3" id="singleRecent">
            <Row>
                <Col md={2}>
                    <img className="mt-2 ml-5" src="https://lastfm.freetls.fastly.net/i/u/770x0/24ff278069133faeb1ab65afb439a25d.jpg#24ff278069133faeb1ab65afb439a25d" width="60px" height="60px" />
                </Col>
                <Col md={1}>
                    <p id="heartIcon" className="mt-4"><FontAwesomeIcon icon={faHeart} /></p>
                </Col>
                <Col md={4}>
                    <p className="mt-4 text-muted">Dreams - 2004 Remaster</p>
                </Col>
                <Col md={3}>
                    <p className="mt-4 text-muted">Fleetwood Mac</p>
                </Col>
                <Col md={1}>
                    <p className="mt-3 text-muted">28 Sep 1:56pm</p>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleRecent