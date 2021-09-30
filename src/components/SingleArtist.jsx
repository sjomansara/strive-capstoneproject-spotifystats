import { Container, Card, Row } from "react-bootstrap"

const SingleArtist = (props) => {
    return (
        <Container className="my-3 ml-3">
            <Row>
            <Card id="albumCard" className="" style={{ width: '13.2rem' }}>
            <Card.Img className="rounded-0" variant="top" src={props.img} />
            <Card.Body>
                <Card.Title className="text-muted">1. {props.artist}</Card.Title>
            </Card.Body>
            </Card>
            </Row>
        </Container>
    )
}

export default SingleArtist