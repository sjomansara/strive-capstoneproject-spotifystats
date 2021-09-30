import { Container, Card, Row } from "react-bootstrap"

const SingleArtist = () => {
    return (
        <Container className="my-3 ml-3">
            <Row>
            <Card id="albumCard" className="ml-3 mt-3" style={{ width: '13rem' }}>
            <Card.Img variant="top" src="https://lastfm.freetls.fastly.net/i/u/770x0/2c102767857e449598a978a23c90b443.jpg#2c102767857e449598a978a23c90b443" />
            <Card.Body>
                <Card.Title className="text-muted">1. Fleetwood Mac</Card.Title>
            </Card.Body>
            </Card>
            </Row>
        </Container>
    )
}

export default SingleArtist