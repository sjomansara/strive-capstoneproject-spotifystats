import { Col, Row } from "react-bootstrap"

const TrackDetails = (props) => {
    return (
        <Row>
            <Col md={4} className="">
                <img src={props.img} width="350px" height="350px" />
            </Col>
            <Col md={8} className="text-muted mt-3" id="trackDetails">
                <h4>Dreams - 2004 Remaster</h4>
                <h5>Fleetwood Mac</h5>
                <h5>4:23</h5>
            </Col>
        </Row>
    )
}

export default TrackDetails