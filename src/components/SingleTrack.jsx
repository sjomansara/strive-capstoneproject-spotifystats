import { Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const SingleTrack = (props) => {
    return (
        <Container className="my-3 ml-3" id="singleRecent">
            <Row>
            {props.hasNumbers && <Col md={1}>
                    <p className="mt-4 ml-5 text-muted">{props.number}.</p>
                </Col>}
                <Col md={2}>
                    <img className="mt-2 ml-5" src={props.img} width="60px" height="60px" />
                </Col>
                <Col md={1}>
                    <p id="heartIcon" className="mt-4"><FontAwesomeIcon icon={faHeart} /></p>
                </Col>
                <Col md={4}>
                    <p className="mt-4 text-muted">{props.song}</p>
                </Col>
                <Col md={3}>
                    <p className="mt-4 text-muted">{props.artist}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleTrack