import { Container, Card, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const SingleAlbum = (props) => {
    return (
        <Container className="my-3 ml-3">
            <Row>
            <Card id="albumCard" className="" style={{ width: '13.2rem' }}>
            <Link to="/details" id="linkHover"><Card.Img variant="top" className="rounded-0" src={props.img} /></Link>
            <Card.Body>
                <Link to="/details" id="linkHover"><Card.Title className="text-muted" id="trackName">1. {props.title}</Card.Title></Link>
                <Link to="/details" id="linkHover"><Card.Text className="text-muted" id="trackName">{props.artist}</Card.Text></Link>
            </Card.Body>
            </Card>
            </Row>
        </Container>
    )
}

export default SingleAlbum