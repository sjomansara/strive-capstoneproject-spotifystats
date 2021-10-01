import { Container, Card, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const SingleArtist = (props) => {
    return (
        <Container className="my-3 ml-3">
            <Row>
            <Card id="albumCard" className="" style={{ width: '13.2rem' }}>
            <Link to="/details" id="linkHover"><Card.Img className="rounded-0" variant="top" src={props.img} /></Link>
            <Card.Body>
            <Link to="/details" id="linkHover"><Card.Title id="trackName" className="text-muted">1. {props.artist}</Card.Title></Link>
            </Card.Body>
            </Card>
            </Row>
        </Container>
    )
}

export default SingleArtist